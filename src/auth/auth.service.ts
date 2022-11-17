import { PrismaService } from 'nestjs-prisma';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { SignupInput } from './dto/signup.input';
import { Token } from './models/token.model';
import { SecurityConfig } from 'src/common/configs/config.interface';


enum Role {
  ADMIN= 'ADMIN',
  USER= 'USER'
};
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) {}

  async createUser(payload: SignupInput): Promise<Token> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password
    );

    try {

      const following = await this.prisma.following.create({
        data:{
        }
      })
      const followed = await this.prisma.followed.create({
        data:{
        }
      })
      const user = await this.prisma.user.create({
        data: {
          ...payload,
          password: hashedPassword,
          role:Role.USER,
          points:0,
          followedId:following.id,
          followingId:followed.id,
        },
      });

      return this.generateTokens({
        userId: user.id,
      });
    } catch (e) {
      if (e.code === 'P2002') {
        throw new ConflictException(`username ${payload.username} already used.`);
      }
      throw new Error(e);
    }
  }

  async login(username: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (!user) {
      throw new NotFoundException(`No user found for username: ${username}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password 密码不正确');
    }
    return this.generateTokens({
      userId: user.id,
    });
  }

  validateUser(userId: string): Promise<any> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  getUserFromToken(token: string): Promise<any> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateTokens(payload: { userId: string }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { userId: string }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      return this.generateTokens({
        userId,
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}

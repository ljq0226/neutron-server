import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Image, Tag } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { PrismaService } from 'nestjs-prisma';
import { CreateTweetInput } from './dto/create-tweet.input';
import { Tweet } from './entities/tweet.entity';
import Status from 'src/common/error/status';
@Injectable()
export class TweetService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createTweetInput: CreateTweetInput) {
    const images = createTweetInput.images.map((src) => {
      return { src };
    });
    const tags = createTweetInput.tags.map((id) => {
      return { id };
    });
    const tweet = await this.prisma.tweet.create({
      include: {
        images: true,
        tags: true,
      },
      data: {
        userId: createTweetInput.userId,
        content: createTweetInput.content,
        tags: {
          connect: tags,
        },
        images: {
          create: images,
        },
      },
    });
    return tweet;
  }

  async findAll() {
    return await this.prisma.tweet.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.tweet.findUnique({ where: { id } });
  }

  async remove(id: number) {
    const tweet = await this.prisma.tweet.findUnique({ where: { id } })
    if (tweet) {
      await this.prisma.tweet.delete({ where: { id } })
      return Status.SUCCESS('操作成功')
    } else {
      Status.BADREQUEST('删除推id有误,该tweet不存在')
    }
  }
}

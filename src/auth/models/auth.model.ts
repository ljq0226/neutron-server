import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entity/user.entity';
import { Token } from './token.model';

@ObjectType()
export class Auth extends Token {
  user: User;
}

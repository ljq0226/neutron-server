import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
// import {  } from 'class-validator';
import { BaseModel } from 'src/common/models/base.model';
import { Tweet } from 'src/tweet/entities/tweet.entity';
export enum Role {
  ADMIN= 'ADMIN',
  USER= 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User {

  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  createdAt: Date


  @HideField()
  password: string;

  @Field()
  role: Role;

  @Field()
  points: number;

  @Field(()=>[Tweet],{nullable:'itemsAndList'})
  tweets: Tweet[];




}

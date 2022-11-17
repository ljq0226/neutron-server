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
  ADMIN,
  USER,
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {

  @Field()
  id: string;

  @Field()
  username: string;

  
  @HideField()
  password: string;

  @Field(() => Role)
  role: Role;

  @Field()
  points: number;

  @Field(()=>Tweet)
  tweets: Tweet[];




}

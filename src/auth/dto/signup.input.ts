import { IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  username: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  password: string;
}

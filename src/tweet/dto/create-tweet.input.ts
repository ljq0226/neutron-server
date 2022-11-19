import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTweetInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  content: string;

  @Field(() => [String])
  images: string[];

  @Field(() => [Number])
  tags: number[];
}

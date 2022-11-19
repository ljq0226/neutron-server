import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tweet } from '../../tweet/entities/tweet.entity';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  content: string;
  @Field(() => Int)
  tweetId: number;
  @Field(() => Tweet, { nullable: 'itemsAndList' })
  tweet: Tweet;
  @Field(() => Date)
  createAt: Date;
}

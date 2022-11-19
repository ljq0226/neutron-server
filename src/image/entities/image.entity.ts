import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tweet } from '../../tweet/entities/tweet.entity';

@ObjectType()
export class Image {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  src: string;
  @Field(() => Int)
  tweetId: number;
  @Field(() => Tweet, { nullable: 'itemsAndList' })
  tweet: Tweet;
}

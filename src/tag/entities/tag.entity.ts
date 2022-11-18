import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tweet } from '../../tweet/entities/tweet.entity';

@ObjectType()
export class Tag {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  tagName: string;
  @Field(() => [Tweet], { nullable: 'items' })
  tweets: Tweet[];
}

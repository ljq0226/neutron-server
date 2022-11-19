import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TweetService } from './tweet.service';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetInput } from './dto/create-tweet.input';

@Resolver(() => Tweet)
export class TweetResolver {
  constructor(private readonly tweetService: TweetService) {}

  @Query(() => [Tweet])
  Tweet_FindAll() {
    return this.tweetService.findAll();
  }

  @Query(() => Tweet)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tweetService.findOne(id);
  }

  @Mutation(() => Tweet)
  Tweet_Create(@Args('createTweetInput') createTweetInput: CreateTweetInput) {
    return this.tweetService.create(createTweetInput);
  }

  @Mutation(() => Tweet)
  removeTweet(@Args('id', { type: () => Int }) id: number) {
    return this.tweetService.remove(id);
  }
}

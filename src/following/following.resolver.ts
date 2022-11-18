import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FollowingService } from './following.service';
import { Following } from './entities/following.entity';
import { CreateFollowingInput } from './dto/create-following.input';
import { UpdateFollowingInput } from './dto/update-following.input';

@Resolver(() => Following)
export class FollowingResolver {
  constructor(private readonly followingService: FollowingService) {}

  @Mutation(() => Following)
  createFollowing(
    @Args('createFollowingInput') createFollowingInput: CreateFollowingInput
  ) {
    return this.followingService.create(createFollowingInput);
  }

  @Query(() => [Following], { name: 'following' })
  findAll() {
    return this.followingService.findAll();
  }

  @Query(() => Following, { name: 'following' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.followingService.findOne(id);
  }

  @Mutation(() => Following)
  updateFollowing(
    @Args('updateFollowingInput') updateFollowingInput: UpdateFollowingInput
  ) {
    return this.followingService.update(
      updateFollowingInput.id,
      updateFollowingInput
    );
  }

  @Mutation(() => Following)
  removeFollowing(@Args('id', { type: () => Int }) id: number) {
    return this.followingService.remove(id);
  }
}

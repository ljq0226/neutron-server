import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FollowedService } from './followed.service';
import { Followed } from './entities/followed.entity';
import { CreateFollowedInput } from './dto/create-followed.input';
import { UpdateFollowedInput } from './dto/update-followed.input';

@Resolver(() => Followed)
export class FollowedResolver {
  constructor(private readonly followedService: FollowedService) {}

  @Mutation(() => Followed)
  createFollowed(@Args('createFollowedInput') createFollowedInput: CreateFollowedInput) {
    return this.followedService.create(createFollowedInput);
  }

  @Query(() => [Followed], { name: 'followed' })
  findAll() {
    return this.followedService.findAll();
  }

  @Query(() => Followed, { name: 'followed' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.followedService.findOne(id);
  }

  @Mutation(() => Followed)
  updateFollowed(@Args('updateFollowedInput') updateFollowedInput: UpdateFollowedInput) {
    return this.followedService.update(updateFollowedInput.id, updateFollowedInput);
  }

  @Mutation(() => Followed)
  removeFollowed(@Args('id', { type: () => Int }) id: number) {
    return this.followedService.remove(id);
  }
}

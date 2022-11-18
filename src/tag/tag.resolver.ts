import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  //创建tag
  @Mutation(() => Tag)
  Tag_Create(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagService.create(createTagInput);
  }

  @Query(() => [Tag], { description: '返回所有tags' })
  Tag_FindAll() {
    return this.tagService.findAll();
  }

  @Query(() => Tag)
  Tag_FindById(@Args('id', { type: () => Int }) id: number) {
    return this.tagService.findOne(id);
  }

  @Mutation(() => Tag)
  Tag_Remove(@Args('id', { type: () => Int }) id: number) {
    return this.tagService.remove(id);
  }
}

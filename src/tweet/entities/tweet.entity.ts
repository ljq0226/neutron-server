import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Image } from 'src/image/entities/image.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { Comment } from 'src/comment/entities/comment.entity';
@ObjectType()
export class Tweet {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  content: string;
  @Field(() => [Image], { nullable: 'itemsAndList' })
  images: Image[];
  @Field(() => Int)
  like: number;
  @Field(() => GraphQLISODateTime)
  createAt: Date;
  @Field(() => [Tag], { nullable: 'itemsAndList' })
  tags: Tag[];
  @Field(() => [Comment], { nullable: 'itemsAndList' })
  comments: Comment[];
}

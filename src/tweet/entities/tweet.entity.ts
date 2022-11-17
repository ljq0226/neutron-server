import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Image } from 'src/image/entities/image.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { Comment } from 'src/comment/entities/comment.entity';
@ObjectType()
export class Tweet {
  @Field(() => Int)
  id: number;
  @Field(()=>String)
  content: string;
  @Field(()=>Image)
  images:Image[];
  @Field(() => Int)
  like: number;
  @Field(()=>Date)
  createAt:Date
  @Field(()=>Tag)
  tags:Tag[];
  @Field(()=>Comment)
  comments:Tag[];
  
}

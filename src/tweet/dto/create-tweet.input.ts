import { InputType, Int, Field } from '@nestjs/graphql';
import { Image } from 'src/image/entities/image.entity';
import { Tag } from 'src/tag/entities/tag.entity';


@InputType()
export class CreateTweetInput {
  @Field(()=>String)
  userId:string

  @Field(()=>String)
  content:string

  @Field(()=>[String])
  images:string[]

  @Field(()=>[Number])
  tags:number[]

  


}

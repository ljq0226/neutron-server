import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTagInput {
  @Field(() => String, { description: '创建标签' })
  tagName:string 
}

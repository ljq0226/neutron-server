import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

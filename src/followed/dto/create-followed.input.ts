import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFollowedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

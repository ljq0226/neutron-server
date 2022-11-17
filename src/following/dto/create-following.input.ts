import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFollowingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

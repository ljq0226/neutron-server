import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Following {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

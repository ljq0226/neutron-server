import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tweet {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

import { CreateFollowedInput } from './create-followed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFollowedInput extends PartialType(CreateFollowedInput) {
  @Field(() => Int)
  id: number;
}

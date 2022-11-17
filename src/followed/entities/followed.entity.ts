import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entity/user.entity';

@ObjectType()
export class Followed {
 @Field()
 id:number
 @Field(()=>User)
 followed:User[]
}

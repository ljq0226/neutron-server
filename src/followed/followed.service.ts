import { Injectable } from '@nestjs/common';
import { CreateFollowedInput } from './dto/create-followed.input';
import { UpdateFollowedInput } from './dto/update-followed.input';

@Injectable()
export class FollowedService {
  create(createFollowedInput: CreateFollowedInput) {
    return 'This action adds a new followed';
  }

  findAll() {
    return `This action returns all followed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} followed`;
  }

  update(id: number, updateFollowedInput: UpdateFollowedInput) {
    return `This action updates a #${id} followed`;
  }

  remove(id: number) {
    return `This action removes a #${id} followed`;
  }
}

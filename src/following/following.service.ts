import { Injectable } from '@nestjs/common';
import { CreateFollowingInput } from './dto/create-following.input';
import { UpdateFollowingInput } from './dto/update-following.input';

@Injectable()
export class FollowingService {
  create(createFollowingInput: CreateFollowingInput) {
    return 'This action adds a new following';
  }

  findAll() {
    return `This action returns all following`;
  }

  findOne(id: number) {
    return `This action returns a #${id} following`;
  }

  update(id: number, updateFollowingInput: UpdateFollowingInput) {
    return `This action updates a #${id} following`;
  }

  remove(id: number) {
    return `This action removes a #${id} following`;
  }
}

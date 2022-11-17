import { Module } from '@nestjs/common';
import { FollowedService } from './followed.service';
import { FollowedResolver } from './followed.resolver';

@Module({
  providers: [FollowedResolver, FollowedService]
})
export class FollowedModule {}

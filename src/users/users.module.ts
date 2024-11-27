/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserGetResponse } from './services/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  providers: [UserGetResponse],
  controllers: [UsersController]
})
export class UsersModule {}

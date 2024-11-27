import { Controller, Get } from '@nestjs/common';
import { UserGetResponse } from 'src/users/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UserGetResponse: UserGetResponse) {}

  @Get('response')
  getHello(): string {
    return this.UserGetResponse.getHello();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserGetResponse {
  getHello(): string {
    return 'Hola desde users service!';
  }
}

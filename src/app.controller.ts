import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  getHello() {
    return 'Hello World';
  }
}

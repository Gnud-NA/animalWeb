import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('all')
  getAll(): object {
    const cat = {
      name: 'meow',
      age: 2,
      type: 'cat',
    };
    return cat;
  }
}

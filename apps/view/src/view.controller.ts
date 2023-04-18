import { Controller, Get } from '@nestjs/common';
import { ViewService } from './view.service';

@Controller()
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get()
  getHello(): string {
    return this.viewService.getHello();
  }
}

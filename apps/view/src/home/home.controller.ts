import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { HomeService } from './home.service';
import { Response } from 'express';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}
  // @Get('/')
  // home(@Res() res: Response, @Query('name') name = 'mahsa') {
  //   return res.render('index', { name });
  // }

  // @Get('/:name')
  // home1(@Res() res: Response, @Param('name') name = 'mahsa') {
  //   return res.render('index', { name });
  // }

  @Get('/about')
  about(@Res() res: Response) {
    return res.render('about', { layout: 'layout/main', title: 'about us' });
  }

  @Get('/')
  home(@Res() res: Response, @Query('name') name = 'mahsa') {
    return res.render('index', { layout: 'layout/main', name, title: 'home' });
  }
}

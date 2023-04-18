import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { views } from '@libs/common';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  userlist(@Res() res: Response) {
    return views(res, 'user/list', { title: 'user list page' });
  }
  @Get('/login')
  login(@Res() res: Response) {
    return views(res, 'user/login', { title: 'login page' });
  }

  @Post('/login')
  async loginPst(@Res() res: Response, @Body() data: any) {
    const user = await this.userService.loginn(data);
    // return res.send({ user });
    if (user?.error) {
      return views(res, 'user/login', {
        title: 'login page',
        error: user?.error,
      });
    } else {
      return views(res, 'user/dashboard', {
        title: 'login page',
        error: user?.error,
      });
    }
  }

  @Get('/signup')
  signup(@Res() res: Response) {
    return views(res, 'user/signup', { title: 'signup page' });
  }

  @Post('/signup')
  async signupPost(@Res() res: Response, @Body() data: any) {
    const user = await this.userService.signUp(data);
    // return res.send({ user });
    if (user?.error) {
      return views(res, 'user/signup', {
        title: 'sign up page',
        error: user?.error,
      });
    } else {
      return views(res, 'user/dashboard', {
        title: 'sign up page',
        error: user?.error,
      });
    }
  }
}

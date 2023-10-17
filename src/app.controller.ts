import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Record<string, any> {
    return this.appService.getHello();
  }

  @Post()
  upload(@Req() req: Request, @Res() res: Response) {
    res.set({
      'Access-Control-Allow-Origin': '*',
    });
    res.send(this.appService.upload(req));
  }
}

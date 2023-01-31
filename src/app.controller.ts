/* eslint-disable prettier/prettier */
import { Body,
         Controller,
         Delete,
         Get,
         Param,
         Post,
         Put,
         Render
     } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Csavarbolt } from './csavarbolt.entity';
import { Rendeles } from './rendeles.entity';

@Controller()
export class AppController {
    private readonly appService: AppService;
    private dataSource: DataSource;

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/csavar')
  listCsavarok() {
    const csavarRepo = this.dataSource.getRepository(Csavarbolt);
    return csavarRepo.find();
  }

  @Post('/csavar')
  newCsavar(@Body() csavar: Csavarbolt) {
    const csavarRepo = this.dataSource.getRepository(Csavarbolt);
    csavarRepo.save(csavar);
  }
}

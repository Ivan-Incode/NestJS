import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductModel } from '../product/product.model';
import { FindProductDto } from '../product/dto/find-product.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from "./top-page.model";

@Controller('top-page')
export class TopPageController {
  constructor(){}

  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {}

  @Post('find')
  async getByCategory(@Body() dto: FindTopPageDto): Promise<FindTopPageResponse[]> {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {

  }
}

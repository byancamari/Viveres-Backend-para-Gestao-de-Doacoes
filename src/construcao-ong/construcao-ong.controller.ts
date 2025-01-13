import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstrucaoOngService } from './construcao-ong.service';
import { CreateConstrucaoOngDto } from './dto/create-construcao-ong.dto';
import { UpdateConstrucaoOngDto } from './dto/update-construcao-ong.dto';

@Controller('construcao-ong')
export class ConstrucaoOngController {
  constructor(private readonly construcaoOngService: ConstrucaoOngService) {}

  @Post()
  create(@Body() createConstrucaoOngDto: CreateConstrucaoOngDto) {
    return this.construcaoOngService.create(createConstrucaoOngDto);
  }

  @Get()
  findAll() {
    return this.construcaoOngService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.construcaoOngService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConstrucaoOngDto: UpdateConstrucaoOngDto) {
    return this.construcaoOngService.update(+id, updateConstrucaoOngDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.construcaoOngService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstrucaoDoadorService } from './construcao-doador.service';
import { CreateConstrucaoDoadorDto } from './dto/create-construcao-doador.dto';
import { UpdateConstrucaoDoadorDto } from './dto/update-construcao-doador.dto';

@Controller('construcao-doador')
export class ConstrucaoDoadorController {
  constructor(private readonly construcaoDoadorService: ConstrucaoDoadorService) {}

  @Post()
  create(@Body() createConstrucaoDoadorDto: CreateConstrucaoDoadorDto) {
    return this.construcaoDoadorService.create(createConstrucaoDoadorDto);
  }

  @Get()
  findAll() {
    return this.construcaoDoadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.construcaoDoadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConstrucaoDoadorDto: UpdateConstrucaoDoadorDto) {
    return this.construcaoDoadorService.update(+id, updateConstrucaoDoadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.construcaoDoadorService.remove(+id);
  }
}

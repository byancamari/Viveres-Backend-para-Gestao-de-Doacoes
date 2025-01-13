import { Injectable } from '@nestjs/common';
import { CreateConstrucaoDoadorDto } from './dto/create-construcao-doador.dto';
import { UpdateConstrucaoDoadorDto } from './dto/update-construcao-doador.dto';

@Injectable()
export class ConstrucaoDoadorService {
  create(createConstrucaoDoadorDto: CreateConstrucaoDoadorDto) {
    return 'This action adds a new construcaoDoador';
  }

  findAll() {
    return `This action returns all construcaoDoador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} construcaoDoador`;
  }

  update(id: number, updateConstrucaoDoadorDto: UpdateConstrucaoDoadorDto) {
    return `This action updates a #${id} construcaoDoador`;
  }

  remove(id: number) {
    return `This action removes a #${id} construcaoDoador`;
  }
}

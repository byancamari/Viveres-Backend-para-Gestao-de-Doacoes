import { Injectable } from '@nestjs/common';
import { CreateConstrucaoOngDto } from './dto/create-construcao-ong.dto';
import { UpdateConstrucaoOngDto } from './dto/update-construcao-ong.dto';

@Injectable()
export class ConstrucaoOngService {
  create(createConstrucaoOngDto: CreateConstrucaoOngDto) {
    return 'This action adds a new construcaoOng';
  }

  findAll() {
    return `This action returns all construcaoOng`;
  }

  findOne(id: number) {
    return `This action returns a #${id} construcaoOng`;
  }

  update(id: number, updateConstrucaoOngDto: UpdateConstrucaoOngDto) {
    return `This action updates a #${id} construcaoOng`;
  }

  remove(id: number) {
    return `This action removes a #${id} construcaoOng`;
  }
}

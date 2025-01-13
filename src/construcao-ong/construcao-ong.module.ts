import { Module } from '@nestjs/common';
import { ConstrucaoOngService } from './construcao-ong.service';
import { ConstrucaoOngController } from './construcao-ong.controller';

@Module({
  controllers: [ConstrucaoOngController],
  providers: [ConstrucaoOngService],
})
export class ConstrucaoOngModule {}

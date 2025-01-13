import { Module } from '@nestjs/common';
import { ConstrucaoDoadorService } from './construcao-doador.service';
import { ConstrucaoDoadorController } from './construcao-doador.controller';

@Module({
  controllers: [ConstrucaoDoadorController],
  providers: [ConstrucaoDoadorService],
})
export class ConstrucaoDoadorModule {}

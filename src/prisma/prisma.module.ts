import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Marca este módulo como global
@Module({
  providers: [PrismaService], // Registra o PrismaService
  exports: [PrismaService],   // Permite exportar o PrismaService
})
export class PrismaModule {}
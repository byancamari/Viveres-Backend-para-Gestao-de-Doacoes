import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { ConstrucaoDoadorModule } from './construcao-doador/construcao-doador.module';
import { ConstrucaoOngModule } from './construcao-ong/construcao-ong.module';
import { DoacaoModule } from './doacao/doacao.module';
import { PrismaModule } from './prisma/prisma.module';
import {AuthModule} from './auth/auth.module'

@Module({
  imports: [
    PrismaModule, 
    UsersModule,
    ConstrucaoDoadorModule,
    ConstrucaoOngModule,
    DoacaoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

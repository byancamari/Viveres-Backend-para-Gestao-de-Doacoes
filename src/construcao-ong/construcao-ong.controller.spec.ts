import { Test, TestingModule } from '@nestjs/testing';
import { ConstrucaoOngController } from './construcao-ong.controller';
import { ConstrucaoOngService } from './construcao-ong.service';

describe('ConstrucaoOngController', () => {
  let controller: ConstrucaoOngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstrucaoOngController],
      providers: [ConstrucaoOngService],
    }).compile();

    controller = module.get<ConstrucaoOngController>(ConstrucaoOngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ConstrucaoOngService } from './construcao-ong.service';

describe('ConstrucaoOngService', () => {
  let service: ConstrucaoOngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstrucaoOngService],
    }).compile();

    service = module.get<ConstrucaoOngService>(ConstrucaoOngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { PartialType } from '@nestjs/mapped-types';
import { CreateConstrucaoOngDto } from './create-construcao-ong.dto';

export class UpdateConstrucaoOngDto extends PartialType(CreateConstrucaoOngDto) {}

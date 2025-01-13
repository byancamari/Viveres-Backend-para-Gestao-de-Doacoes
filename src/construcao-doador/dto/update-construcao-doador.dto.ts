import { PartialType } from '@nestjs/mapped-types';
import { CreateConstrucaoDoadorDto } from './create-construcao-doador.dto';

export class UpdateConstrucaoDoadorDto extends PartialType(CreateConstrucaoDoadorDto) {}

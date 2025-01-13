import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TipoUsuario } from '@prisma/client';

export class CreateUserDto {
  id?: number; // ID é opcional

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(TipoUsuario)
  tipoUsuario: TipoUsuario;

  // createdAt e updatedAt são gerenciados pelo Prisma e não precisam estar no DTO
}

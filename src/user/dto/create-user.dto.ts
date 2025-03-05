export class CreateUserDto {
  email: string;
  password: string;
  tipoUsuario: 'DOADOR' | 'ONG';
  doadorId?: number;
  receptorId?: number;
}

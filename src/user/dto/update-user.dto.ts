export class UpdateUserDto {
    email?: string;
    password?: string;
    tipoUsuario?: 'DOADOR' | 'ONG';
    doadorId?: number;
    receptorId?: number;
  }
  
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, TipoUsuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  // Criar um novo usuário
  async createUser(data: {
    email: string;
    password: string;
    tipoUsuario: TipoUsuario;
    doadorId?: number;
    receptorId?: number;
  }): Promise<User> {
    // Hash da senha
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Criar usuário
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        tipoUsuario: data.tipoUsuario,
        doadorId: data.doadorId,
        receptorId: data.receptorId,
      },
    });
  }

  // Buscar usuário por email
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Buscar todos os usuários
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Buscar usuário por ID
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }, // id deve ser um campo único
    });
  }
  

  // Atualizar informações do usuário
  async updateUser(
    id: string,
    data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Deletar usuário
  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

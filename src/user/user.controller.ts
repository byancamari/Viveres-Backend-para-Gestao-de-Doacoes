import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { User, TipoUsuario } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Criar um novo usuário
  @Post()
  async createUser(
    @Body()
    data: {
      email: string;
      password: string;
      tipoUsuario: TipoUsuario;
      doadorId?: number;
      receptorId?: number;
    },
  ): Promise<User> {
    return this.usersService.createUser(data);
  }

  // Listar todos os usuários
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Buscar um usuário por ID
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findById(id); // Passa id como string
}


  // Atualizar um usuário
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<User> {
    return this.usersService.updateUser(String(id), data);
  }
  

  // Deletar um usuário
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }
}

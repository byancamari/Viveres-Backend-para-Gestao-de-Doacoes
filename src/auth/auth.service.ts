import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import prisma from '../prisma/prismaClient';

@Injectable()
export class AuthService {
  private saltRounds = 10;

  async registerUser(email: string, password: string, tipoUsuario: string) {
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        tipoUsuario: tipoUsuario.toUpperCase() as 'DOADOR' | 'ONG',
      },
    });
  }

  async loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Senha inválida');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' },
    );

    return token;
  }
}

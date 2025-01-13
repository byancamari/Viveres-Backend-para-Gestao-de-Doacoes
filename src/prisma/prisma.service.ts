import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  async $connect(): Promise<void> {  // Certifique-se de que seja 'async'
    try {
      await super.$connect();
      console.log('Conectado ao banco de dados com sucesso.');
    } catch (error) {
      console.error('Falha ao conectar ao banco de dados:', error);
      throw error;
    }
  }
}

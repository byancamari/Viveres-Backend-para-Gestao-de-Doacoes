import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Rejeitar tokens expirados
      secretOrKey: 'secretKey', // Use uma chave secreta forte
    });
  }

  async validate(payload: any) {
    // O payload contém os dados do token (geralmente ID do usuário e outras informações)
    return { userId: payload.sub, email: payload.email };
  }
}

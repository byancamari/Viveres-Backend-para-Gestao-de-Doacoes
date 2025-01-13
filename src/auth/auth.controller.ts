import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') 
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    return this.authService.registerUser(body.email, body.password, body.tipoUsuario);
  }

  @Post('login')
  async login(@Body() body: any) {
    return this.authService.loginUser(body.email, body.password);
  }
}

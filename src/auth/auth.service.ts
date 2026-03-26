import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  Dologin() {
    return 'Olá do AuthService';
  }
}

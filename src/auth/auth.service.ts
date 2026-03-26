import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  Dologin(loginDto: LoginDto) {
    console.log(loginDto instanceof LoginDto, loginDto);
    return loginDto;
  }
}

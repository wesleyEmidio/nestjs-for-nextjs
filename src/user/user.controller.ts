import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe';

@Controller('user')
export class UserController {
  constructor(private readonly configService: ConfigService) {}

  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    console.log(id, typeof id);
    console.log(this.configService.get('TESTE', '1234'));
    console.log(this.configService.getOrThrow('TESTE1'));
    return `Olá do controller do user ${id}!`;
  }
}

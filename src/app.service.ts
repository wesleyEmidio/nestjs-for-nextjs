// Importa o decorator Injectable do NestJS.
// Ele é usado para marcar a classe como um serviço que pode ser injetado em outros lugares.
import { Injectable } from '@nestjs/common';

// Decorator que indica que essa classe pode ser usada pelo sistema de injeção de dependência do NestJS.
@Injectable()

// Declaração da classe AppService.
// Por padrão, ela será um "provider" (serviço) dentro da aplicação.
export class AppService {
  // Método público chamado getHello.
  // Ele retorna uma string.
  getHello(): string {
    // Retorna a string "Hello World!".
    // Esse método geralmente é usado como exemplo inicial no NestJS.
    return 'Hello World!';
  }
}

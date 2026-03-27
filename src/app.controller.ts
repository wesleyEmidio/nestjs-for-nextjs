// Importa os decorators Controller e Get do NestJS.
// Controller define uma classe como responsável por rotas.
// Get define um endpoint HTTP do tipo GET.
import { Controller, Get } from '@nestjs/common';

// Importa o serviço que criamos (AppService).
// Ele contém a lógica de negócio (ex: retornar "Hello World").
import { AppService } from './app.service';

// Define essa classe como um Controller.
// Como não foi passado nenhum caminho (ex: 'users'),
// essa rota será a raiz: http://localhost:3000/
@Controller()
export class AppController {
  // Construtor da classe.
  // Aqui usamos injeção de dependência:
  // O NestJS automaticamente instancia o AppService e injeta aqui.
  // "private readonly" cria e atribui a propriedade automaticamente.
  constructor(private readonly appService: AppService) {}

  // Define um endpoint HTTP do tipo GET.
  // Como não foi passado caminho, responde na rota "/"
  @Get()
  getHello(): string {
    // Chama o método getHello do AppService
    // e retorna o resultado para o cliente (browser, Postman, etc).
    return this.appService.getHello();
  }
}

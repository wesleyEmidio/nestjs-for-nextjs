// Importa o decorator Module do NestJS.
// Ele é usado para organizar a aplicação em módulos.
import { Module } from '@nestjs/common';

// Importa o controller principal da aplicação.
import { AppController } from './app.controller';

// Importa o service principal.
import { AppService } from './app.service';

// Importa módulos da aplicação (separação por responsabilidade).
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

// Importa o módulo de configuração (.env).
import { ConfigModule } from '@nestjs/config';

// Importa o módulo do TypeORM (ORM para banco de dados).
import { TypeOrmModule } from '@nestjs/typeorm';

// Decorator que define este arquivo como um módulo NestJS.
@Module({
  // Aqui ficam os módulos que essa aplicação usa.
  imports: [
    // Módulos internos da aplicação
    AuthModule,
    UserModule,
    PostModule,

    // ConfigModule carrega variáveis do .env
    // isGlobal: true permite usar process.env em qualquer lugar sem importar novamente
    ConfigModule.forRoot({ isGlobal: true }),

    // Configuração do banco de dados de forma assíncrona
    TypeOrmModule.forRootAsync({
      // Função que retorna a configuração do banco dinamicamente
      useFactory: () => {
        // Se o tipo do banco for SQLite (melhor para dev/local)
        if (process.env.DB_TYPE === 'better-sqlite3') {
          return {
            type: 'better-sqlite3', // Tipo do banco

            // Caminho do arquivo do banco SQLite
            database: process.env.DB_DATABASE || './db.sqlite',

            // Se true, cria/atualiza tabelas automaticamente
            synchronize: process.env.DB_SYNCHRONIZE === '1',

            // Carrega automaticamente as entidades (models)
            autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES === '1',
          };
        }

        // Caso contrário, usa PostgreSQL (geralmente produção)
        return {
          type: 'postgres', // Tipo do banco

          // Host do banco (ex: localhost ou servidor)
          host: process.env.DB_HOST,

          // Porta do banco (converte string para número)
          port: parseInt(process.env.DB_PORT || '5432', 10),

          // Usuário do banco
          username: process.env.DB_USERNAME,

          // Senha do banco
          password: process.env.DB_PASSWORD,

          // Nome do banco
          database: process.env.DB_DATABASE,

          // Cria/atualiza tabelas automaticamente
          synchronize: process.env.DB_SYNCHRONIZE === '1',

          // Carrega entidades automaticamente
          autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES === '1',
        };
      },
    }),
  ],

  // Controllers disponíveis nesse módulo
  controllers: [AppController],

  // Services (providers) disponíveis para injeção de dependência
  providers: [AppService],

  // O que esse módulo exporta para outros módulos
  exports: [],
})

// Classe principal do módulo da aplicação
export class AppModule {}

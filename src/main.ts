import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { LoggerFactory } from './common/logger/logger-factory';
import { DatabaseExceptionFilter } from './helpers/errorsHanding';

const start = async ()=>{
  const PORT = process.env.PORT || 3010
  const app = await NestFactory.create(AppModule,{logger:LoggerFactory('Passport')});
  app.useGlobalFilters(new DatabaseExceptionFilter());
  app.setGlobalPrefix('api')
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('HOTELS project')
  .setDescription('The Hostels new project')
  .setVersion('1.0')
  .addTag('Postgres,Typeorm,Graphql,JWT,Swagger,SMS,Mailer')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
    
  });
}
start();

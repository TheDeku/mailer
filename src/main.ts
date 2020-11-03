import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/config.keys';
import { registerWithEureka } from './eureka-helper';
import * as dotenv from 'dotenv';


async function bootstrap() {
  const logger = new Logger('mailService');
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.enableCors();

  //  /api/endpointName



  await app.listen(AppModule.port);
  // registerWithEureka("auth", parseInt(AppModule.port));


  registerWithEureka("mailer", parseInt(AppModule.port.toString()));

  logger.verbose(`Version: ${environment.appVersion}`)
  logger.verbose(`Description: ${environment.appDescription}`)
  logger.verbose(`Author: ${environment.appAuthor}`)
  logger.verbose(`Application listening on port: ${AppModule.port}`)

  logger.verbose(`Application listening on port: ${process.env.EMAIL_ID}`)

    
  
}
bootstrap();
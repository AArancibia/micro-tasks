import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

const logger = new Logger('Bootstrap');
const { port } = config.get('server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  logger.log(`Server running at port ${ port }`);
}
bootstrap();

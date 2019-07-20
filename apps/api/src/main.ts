/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.port || 3333;
  // await app.listen(port, () => {
  //   console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  // });
  await app.listen(port);
}

bootstrap();

export const handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  });
};

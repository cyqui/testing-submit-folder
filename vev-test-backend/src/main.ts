import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Short on time : No nginx config to federate UI and API.
  app.enableCors({
    "origin": "*",
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

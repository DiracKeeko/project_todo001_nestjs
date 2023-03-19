import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './error/globalException.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 全局添加 "api"前缀
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(7158);
}
bootstrap();

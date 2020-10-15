import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: Реализовать эту проверку через глобал гуард
  //   app.useGlobalGuards(new JwtAuthGuard());

  await app.listen(3000);
}
bootstrap();

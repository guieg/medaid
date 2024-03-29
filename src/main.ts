import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true, logger: console});
  const config = new DocumentBuilder()
    .setTitle('MedAid API')
    .setDescription('Doctor/Patient virtual assistent.')
    .setVersion('1.0')
    .addTag('medaid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

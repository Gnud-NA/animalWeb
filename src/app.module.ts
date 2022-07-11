import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalController } from './controllers/animal.controller';
import { AnimalService } from './services';

@Module({
  imports: [],
  controllers: [AppController, AnimalController],
  providers: [AppService, AnimalService],
})
export class AppModule {}

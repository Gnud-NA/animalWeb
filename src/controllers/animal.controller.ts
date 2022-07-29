import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AnimalDTO } from 'src/dto';
import { AnimalService } from 'src/services';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('/all')
  @HttpCode(200)
  getAll(): Array<AnimalDTO> {
    return this.animalService.getAll();
  }

  @Post('/create')
  @HttpCode(201)
  createAnimal(@Body() animal: AnimalDTO) {
    return this.animalService.createAnimal(animal);
  }
  @Post('/create-mail')
  @HttpCode(201)
  createMailjet() {
    //do something
  }
}

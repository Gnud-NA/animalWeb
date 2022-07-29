import { Injectable } from '@nestjs/common';
import { AnimalDTO } from 'src/dto';
@Injectable()
export class AnimalService {
  private readonly listAnimal: AnimalDTO[] = [];
  getAll(): Array<AnimalDTO> {
    return this.listAnimal;
  }
  createAnimal(animal: AnimalDTO) {
    this.listAnimal.push(animal);
    return {
      message: 'create animal successfully!',
      code: 201,
    };
  }

  createMail() {
    //do something
  }
}

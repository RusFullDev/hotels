import { Injectable } from '@nestjs/common';
import { CreateNumberOfBedroomDto } from './dto/create-number-of-bedroom.dto';
import { UpdateNumberOfBedroomDto } from './dto/update-number-of-bedroom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NumberOfBedroom } from './entities/number-of-bedroom.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NumberOfBedroomsService {
  constructor(@InjectRepository(NumberOfBedroom) private readonly numberOfBedroomRepo:Repository<NumberOfBedroom>){}
  
  
  create(createNumberOfBedroomDto: CreateNumberOfBedroomDto) {
    return this.numberOfBedroomRepo.save(createNumberOfBedroomDto)
  }

  findAll() {
    return this.numberOfBedroomRepo.find()
  }

  findOne(id: number) {
    return this.numberOfBedroomRepo.findOneBy({id})
  }

  async update(id: number, updateNumberOfBedroomDto: UpdateNumberOfBedroomDto) {
   await this.numberOfBedroomRepo.update({id},updateNumberOfBedroomDto)
   return this.findOne(id)
  }

  async remove(id: number) {
await this.numberOfBedroomRepo.delete({id})
    return id
  }
}

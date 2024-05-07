import { Injectable } from '@nestjs/common';
import { CreateRoomsNumberOfBedroomDto } from './dto/create-rooms-number-of-bedroom.dto';
import { UpdateRoomsNumberOfBedroomDto } from './dto/update-rooms-number-of-bedroom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomsNumberOfBedroom } from './entities/rooms-number-of-bedroom.entity';

@Injectable()
export class RoomsNumberOfBedroomsService {
  constructor(@InjectRepository(RoomsNumberOfBedroom) private readonly roomsNumberOfBedroomRepo:Repository<RoomsNumberOfBedroom>){}


  create(createRoomsNumberOfBedroomDto: CreateRoomsNumberOfBedroomDto) {
    return this.roomsNumberOfBedroomRepo.save(createRoomsNumberOfBedroomDto)
  }

  findAll() {
    return this.roomsNumberOfBedroomRepo.find({relations:{room_id:true,room_number_bedrooms_id:true
    },select:{id:false}})
  }

  findOne(id: number) {
    return this.roomsNumberOfBedroomRepo.findOneBy({id})
  }

  async update(id: number, updateRoomsNumberOfBedroomDto: UpdateRoomsNumberOfBedroomDto) {
    await this.roomsNumberOfBedroomRepo.update({id},updateRoomsNumberOfBedroomDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.roomsNumberOfBedroomRepo.delete({id})
    return id
  }
  
}

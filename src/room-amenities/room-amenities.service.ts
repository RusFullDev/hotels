import { Injectable } from '@nestjs/common';
import { CreateRoomAmenityDto } from './dto/create-room-amenity.dto';
import { UpdateRoomAmenityDto } from './dto/update-room-amenity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomAmenity } from './entities/room-amenity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomAmenitiesService {
  constructor(@InjectRepository(RoomAmenity) private readonly roomAmentyRepo:Repository<RoomAmenity>){}

  create(createRoomAmenityDto: CreateRoomAmenityDto) {
    return this.roomAmentyRepo.save(createRoomAmenityDto)
  }

  findAll() {
    return this.roomAmentyRepo.find()
  }

  findOne(id: number) {
    return this.roomAmentyRepo.findOneBy({id})
  }

  async update(id: number, updateRoomAmenityDto: UpdateRoomAmenityDto) {
    await this.roomAmentyRepo.update({id},updateRoomAmenityDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.roomAmentyRepo.delete({id})
    return id
  }
}

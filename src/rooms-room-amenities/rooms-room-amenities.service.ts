import { Injectable } from '@nestjs/common';
import { CreateRoomsRoomAmenityDto } from './dto/create-rooms-room-amenity.dto';
import { UpdateRoomsRoomAmenityDto } from './dto/update-rooms-room-amenity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsRoomAmenity } from './entities/rooms-room-amenity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsRoomAmenitiesService {
  constructor(@InjectRepository(RoomsRoomAmenity) private readonly roomAmentyRepo:Repository<RoomsRoomAmenity>){}
  create(createRoomsRoomAmenityDto: CreateRoomsRoomAmenityDto) {
    return this.roomAmentyRepo.save(createRoomsRoomAmenityDto)
  }

  findAll() {
    return this.roomAmentyRepo.find({relations:{room_amenities_id:true,room_id:true},select:{id:false}})
    }

  findOne(id: number) {
    return this.roomAmentyRepo.findOneBy({id})
  }

 async update(id: number, updateRoomsRoomAmenityDto: UpdateRoomsRoomAmenityDto) {
  await this.roomAmentyRepo.update({id},updateRoomsRoomAmenityDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.roomAmentyRepo.delete({id})
    return id
  }
}

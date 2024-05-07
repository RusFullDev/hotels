import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(@InjectRepository(Room) private readonly roomRepo:Repository<Room>){}

  create(createRoomDto: CreateRoomDto) {
    return this.roomRepo.save(createRoomDto)
  }

  findAll() {
    return this.roomRepo.find({
       relations:{newObjectroom:true,
        roomOrders:true,
        roomAmenties:{room_amenities_id:true},
        roomRoomOffers:{room_offers_id:true},
        roomsBedTypes:{bed_type_id:true},
        roomsNumberOfBedrooms:{room_number_bedrooms_id:true}
       }})
  }

  findOne(id: number) {
    return this.roomRepo.findOneBy({id})
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.roomRepo.update({id}, updateRoomDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.roomRepo.delete({id})
    return id
  }
 

}

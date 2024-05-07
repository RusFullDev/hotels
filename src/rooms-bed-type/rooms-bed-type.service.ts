import { Injectable } from '@nestjs/common';
import { CreateRoomsBedTypeDto } from './dto/create-rooms-bed-type.dto';
import { UpdateRoomsBedTypeDto } from './dto/update-rooms-bed-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsBedType } from './entities/rooms-bed-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsBedTypeService {
constructor(@InjectRepository(RoomsBedType) private readonly roomsBedTypeRepo:Repository<RoomsBedType>){}



  create(createRoomsBedTypeDto: CreateRoomsBedTypeDto) {
    return this.roomsBedTypeRepo.save(createRoomsBedTypeDto)
  }

  findAll() {
    return this.roomsBedTypeRepo.find({relations:{bed_type_id:true,room_id:true},select:{id:false}})
  }

  findOne(id: number) {
    return this.roomsBedTypeRepo.findOneBy({id})
  }

  async update(id: number, updateRoomsBedTypeDto: UpdateRoomsBedTypeDto) {
    await this.roomsBedTypeRepo.update({id},updateRoomsBedTypeDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.roomsBedTypeRepo.delete({id})
    return id
  }




}

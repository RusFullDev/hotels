import { Injectable } from '@nestjs/common';
import { CreateRoomsRoomOfferDto } from './dto/create-rooms-room-offer.dto';
import { UpdateRoomsRoomOfferDto } from './dto/update-rooms-room-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsRoomOffer } from './entities/rooms-room-offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsRoomOffersService {
  constructor(@InjectRepository(RoomsRoomOffer) private readonly roomOffersRepo:Repository<RoomsRoomOffer>){}
  
  
  create(createRoomsRoomOfferDto: CreateRoomsRoomOfferDto) {
    return this.roomOffersRepo.save(createRoomsRoomOfferDto)
  }

  findAll() {
    return this.roomOffersRepo.find({relations:{room_id:true,room_offers_id:true},select:{id:false}})
    }

  findOne(id: number) {
    return this.roomOffersRepo.findOneBy({id})
  }

  async update(id: number, updateRoomsRoomOfferDto: UpdateRoomsRoomOfferDto) {
    await this.roomOffersRepo.update({id},updateRoomsRoomOfferDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.roomOffersRepo.delete({id})
    return id
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRoomOfferDto } from './dto/create-room-offer.dto';
import { UpdateRoomOfferDto } from './dto/update-room-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomOffer } from './entities/room-offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomOffersService {
  constructor(@InjectRepository(RoomOffer) private readonly roomOfferRepo:Repository<RoomOffer>){}

  create(createRoomOfferDto: CreateRoomOfferDto) {
    return this.roomOfferRepo.save(createRoomOfferDto)
  }

  findAll() {
    return this.roomOfferRepo.find()
  }

  findOne(id: number) {
    return this.roomOfferRepo.findOneBy({id})
  }

  async update(id: number, updateRoomOfferDto: UpdateRoomOfferDto) {
    await this.roomOfferRepo.update({id},updateRoomOfferDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.roomOfferRepo.delete({id})
    return id
  }
}

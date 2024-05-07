import { Injectable } from '@nestjs/common';
import { CreateSpecialOfferDto } from './dto/create-special-offer.dto';
import { UpdateSpecialOfferDto } from './dto/update-special-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpecialOffer } from './entities/special-offer.entity';

@Injectable()
export class SpecialOffersService {
  constructor(@InjectRepository(SpecialOffer) private readonly specialOfferRepo:Repository<SpecialOffer>){}

  create(createSpecialOfferDto: CreateSpecialOfferDto) {
    return this.specialOfferRepo.save(createSpecialOfferDto)
  }

  findAll() {
    return this.specialOfferRepo.find()
  }

  findOne(id: number) {
    return this.specialOfferRepo.findOneBy({id})
  }

 async update(id: number, updateSpecialOfferDto: UpdateSpecialOfferDto) {
  await this.specialOfferRepo.update({id},updateSpecialOfferDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.specialOfferRepo.delete({id})
    return id
  }
}

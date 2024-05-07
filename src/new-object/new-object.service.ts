import { Injectable } from '@nestjs/common';
import { CreateNewObjectDto } from './dto/create-new-object.dto';
import { UpdateNewObjectDto } from './dto/update-new-object.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewObject } from './entities/new-object.entity';

@Injectable()
export class NewObjectService {
  constructor(@InjectRepository(NewObject) private readonly objectRepo:Repository<NewObject>){}

  create(createNewObjectDto: CreateNewObjectDto) {
    return this.objectRepo.save(createNewObjectDto)
  }

  findAll() {
    return this.objectRepo.find({
      relations:
      {
        objectAddress:true,
        objectPropertyFac:{propertyFacilities_id:true},
        propertyType_id:true,
        specialOffer_id:true,
        comment_id:true,
        room_id:true,
      },select:{objectAddress:true,objectPropertyFac:true }}
       )
  }

  findOne(id: number) {
    return this.objectRepo.findOneBy({id})
  }

  async update(id: number, updateNewObjectDto: UpdateNewObjectDto) {
    await this.objectRepo.update({id},updateNewObjectDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.objectRepo.delete({id})
    return id
  }
}

import { Injectable } from '@nestjs/common';
import { CreateObjectPropertyFacilityDto } from './dto/create-object-property-facility.dto';
import { UpdateObjectPropertyFacilityDto } from './dto/update-object-property-facility.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectPropertyFacility } from './entities/object-property-facility.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObjectPropertyFacilitiesService {
  constructor(@InjectRepository(ObjectPropertyFacility) private readonly objPropFacRepo:Repository<ObjectPropertyFacility>){}
  
  create(createObjectPropertyFacilityDto: CreateObjectPropertyFacilityDto) {
    return this.objPropFacRepo.save(createObjectPropertyFacilityDto)
  }

  findAll() {
    return this.objPropFacRepo.find({relations:{object_id:true,propertyFacilities_id:true}})
  }

  findOne(id: number) {
    return this.objPropFacRepo.findOneBy({id})
  }

  async update(id: number, updateObjectPropertyFacilityDto: UpdateObjectPropertyFacilityDto) {
    await this.objPropFacRepo.update({id},updateObjectPropertyFacilityDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.objPropFacRepo.delete(id)
    return id
  }
}

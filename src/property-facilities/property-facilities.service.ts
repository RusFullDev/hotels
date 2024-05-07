import { Injectable } from '@nestjs/common';
import { CreatePropertyFacilityDto } from './dto/create-property-facility.dto';
import { UpdatePropertyFacilityDto } from './dto/update-property-facility.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyFacility } from './entities/property-facility.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyFacilitiesService {
  constructor(@InjectRepository(PropertyFacility) private readonly propertyFacilityRepo:Repository<PropertyFacility>){}
  
  create(createPropertyFacilityDto: CreatePropertyFacilityDto) {
    return this.propertyFacilityRepo.save(createPropertyFacilityDto)
  }

  findAll() {
    return this.propertyFacilityRepo.find()
  }

  findOne(id: number) {
    return this.propertyFacilityRepo.findOneBy({id})
  }

  async update(id: number, updatePropertyFacilityDto: UpdatePropertyFacilityDto) {
    await this.propertyFacilityRepo.update({id},updatePropertyFacilityDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.propertyFacilityRepo.delete({id})
    return id
  }
}

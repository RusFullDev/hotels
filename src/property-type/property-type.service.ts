import { Injectable } from '@nestjs/common';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyType } from './entities/property-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyTypeService {
  constructor(@InjectRepository(PropertyType) private readonly propertyTypeRepo:Repository<PropertyType>){}


  create(createPropertyTypeDto: CreatePropertyTypeDto) {
    return this.propertyTypeRepo.save(createPropertyTypeDto)
  }

  findAll() {
    return this.propertyTypeRepo.find({relations:{newObject:true}})
  }

  findOne(id: number) {
    return this.propertyTypeRepo.findOneBy({id})
  }

  async update(id: number, updatePropertyTypeDto: UpdatePropertyTypeDto) {
    await this.propertyTypeRepo.update({id},updatePropertyTypeDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.propertyTypeRepo.delete({id})
    return id
  }
}

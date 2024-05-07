import { Injectable } from '@nestjs/common';
import { CreateBedTypeDto } from './dto/create-bed-type.dto';
import { UpdateBedTypeDto } from './dto/update-bed-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BedType } from './entities/bed-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BedTypeService {
  constructor(@InjectRepository(BedType) private readonly bedTypeRepo:Repository<BedType>){}


  create(createBedTypeDto: CreateBedTypeDto) {
    return this.bedTypeRepo.save(createBedTypeDto)
  }

  findAll() {
    return this.bedTypeRepo.find({relations:{bedTypes:true}})
  }

  findOne(id: number) {
    return this.bedTypeRepo.findOneBy({id})
  }

  async update(id: number, updateBedTypeDto: UpdateBedTypeDto) {
    await this.bedTypeRepo.update({id},updateBedTypeDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.bedTypeRepo.delete({id})
    return id
  }
}

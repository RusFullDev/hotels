import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private readonly addressRepo:Repository<Address>){}

  create(createAddressDto: CreateAddressDto) {
    return this.addressRepo.save(createAddressDto)
  }

  findAll() {
    return this.addressRepo.find({relations:{objects_id:true}})
  }

  findOne(id: number) {
    return this.addressRepo.findOneBy({id})
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    await this.addressRepo.update({id},updateAddressDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.addressRepo.delete({id})
    return id
  }
}

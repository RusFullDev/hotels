import { Injectable } from '@nestjs/common';
import { CreatePaymentTypeDto } from './dto/create-payment_type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentType } from './entities/payment_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentTypeService {
  constructor(@InjectRepository(PaymentType) private readonly paymentTypeRepo:Repository<PaymentType>){}

  create(createPaymentTypeDto: CreatePaymentTypeDto) {
    return this.paymentTypeRepo.save(createPaymentTypeDto)
  }

  findAll() {
    return this.paymentTypeRepo.find({relations:{paymentTypes:true}})
  }

  findOne(id: number) {
    return this.paymentTypeRepo.findOneBy({id})
  }

  async update(id: number, updatePaymentTypeDto: UpdatePaymentTypeDto) {
    await this.paymentTypeRepo.update({id},updatePaymentTypeDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.paymentTypeRepo.delete({id})
    return id
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentTypeService } from './payment_type.service';
import { CreatePaymentTypeDto } from './dto/create-payment_type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment_type.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentType } from './entities/payment_type.entity';

@Resolver('payment-type')
export class PaymentTypeResolver {
  constructor(private readonly paymentTypeService: PaymentTypeService) {}

 
 @Query(()=>[PaymentType])
  findAllPaymentType() {
    return this.paymentTypeService.findAll();
  }

  @Query(()=>PaymentType)
  findOnePaymentType(@Args('id',{type:()=>ID}) id:number) {
    return this.paymentTypeService.findOne(id);
  }

  @Mutation(()=>PaymentType)
  createPaymentType(@Args('createPaymentType') createPaymentTypeDto: CreatePaymentTypeDto) {
    return this.paymentTypeService.create(createPaymentTypeDto);
  }
  @Mutation(()=>PaymentType)
  updatePaymentType(@Args('id',{type:()=>ID}) id: number,
   @Args('updatePaymentType') updatePaymentTypeDto: UpdatePaymentTypeDto) {
    return this.paymentTypeService.update(id, updatePaymentTypeDto);
  }

  @Mutation(()=>PaymentType)
  removePaymentType(@Args('id',{type:()=>ID}) id: number) {
    return this.paymentTypeService.remove(id);
  }
}

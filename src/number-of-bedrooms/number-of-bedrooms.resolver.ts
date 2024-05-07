import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumberOfBedroomsService } from './number-of-bedrooms.service';
import { CreateNumberOfBedroomDto } from './dto/create-number-of-bedroom.dto';
import { UpdateNumberOfBedroomDto } from './dto/update-number-of-bedroom.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NumberOfBedroom } from './entities/number-of-bedroom.entity';

@Resolver('number-of-bedrooms')
export class NumberOfBedroomsResolver {
  constructor(private readonly numberOfBedroomsService: NumberOfBedroomsService) {}


  @Query(()=>[NumberOfBedroom])
  NumberOfBedroomfindAll() {
    return this.numberOfBedroomsService.findAll();
  }

  @Query(()=>NumberOfBedroom)
  findOneNumberOfBedroom(@Args('id',{type:()=>ID}) id: number) {
    return this.numberOfBedroomsService.findOne(id);
  }

  
  @Mutation(()=>NumberOfBedroom)
  createNumberOfBedroom(@Args('createNumberOfBedroom') createNumberOfBedroomDto: CreateNumberOfBedroomDto) {
    return this.numberOfBedroomsService.create(createNumberOfBedroomDto);
  }
  @Mutation(()=>NumberOfBedroom)
  updateNumberOfBedroom(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateNumberOfBedroom') updateNumberOfBedroomDto: UpdateNumberOfBedroomDto) {
    return this.numberOfBedroomsService.update(+id, updateNumberOfBedroomDto);
  }

  @Mutation(()=>NumberOfBedroom)
  removeNumberOfBedroom(@Args('id',{type:()=>ID}) id: number) {
    return this.numberOfBedroomsService.remove(id);
  }
}

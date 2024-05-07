import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectPropertyFacilitiesService } from './object-property-facilities.service';
import { CreateObjectPropertyFacilityDto } from './dto/create-object-property-facility.dto';
import { UpdateObjectPropertyFacilityDto } from './dto/update-object-property-facility.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectPropertyFacility } from './entities/object-property-facility.entity';

@Resolver('object-property-facilities')
export class ObjectPropertyFacilitiesResolver {
  constructor(private readonly objectPropertyFacilitiesService: ObjectPropertyFacilitiesService) {}


  @Query(()=>[ObjectPropertyFacility])
  findAllObjectPropertyFacility() {
    return this.objectPropertyFacilitiesService.findAll();
  }

  @Query(()=>ObjectPropertyFacility)
  findOneObjectPropertyFacility(@Args('id',{type:()=>ID}) id:number) {
    return this.objectPropertyFacilitiesService.findOne(+id);
  }

  
  @Mutation(()=>ObjectPropertyFacility)
  createObjectPropertyFacility(@Args('createObjectPropertyFacility') createObjectPropertyFacilityDto: CreateObjectPropertyFacilityDto) {
    return this.objectPropertyFacilitiesService.create(createObjectPropertyFacilityDto);
  }
  @Mutation(()=>ObjectPropertyFacility)
  updateObjectPropertyFacility(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateObjectPropertyFacility') updateObjectPropertyFacilityDto: UpdateObjectPropertyFacilityDto) {
    return this.objectPropertyFacilitiesService.update(+id, updateObjectPropertyFacilityDto);
  }

  @Mutation(()=>ObjectPropertyFacility)
  removeObjectPropertyFacility(@Args('id',{type:()=>ID}) id: number) {
    return this.objectPropertyFacilitiesService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertyType } from './entities/property-type.entity';

@Resolver('property-type')
export class PropertyTypeResolver {
  constructor(private readonly propertyTypeService: PropertyTypeService) {}

  

  @Query(()=>[PropertyType])
  findAllPropertyType() {
    return this.propertyTypeService.findAll();
  }

  @Query(()=>PropertyType)
  findOnePropertyType(@Args('id',{type:()=>ID}) id:number) {
    return this.propertyTypeService.findOne(id);
  }

  @Mutation(()=>PropertyType)
  createPropertyType(@Args('createPropertyType') createPropertyTypeDto: CreatePropertyTypeDto) {
    return this.propertyTypeService.create(createPropertyTypeDto);
  }
  @Mutation(()=>PropertyType)
  updatePropertyType(@Args('id',{type:()=>ID}) id: number,
   @Args('updatePropertyType') updatePropertyTypeDto: UpdatePropertyTypeDto) {
    return this.propertyTypeService.update(id, updatePropertyTypeDto);
  }

  @Mutation(()=>PropertyType)
  removePropertyType(@Args('id',{type:()=>ID}) id: number) {
    return this.propertyTypeService.remove(id);
  }
}

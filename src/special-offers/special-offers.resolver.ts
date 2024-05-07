import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';
import { CreateSpecialOfferDto } from './dto/create-special-offer.dto';
import { UpdateSpecialOfferDto } from './dto/update-special-offer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SpecialOffer } from './entities/special-offer.entity';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';


@Resolver('special-offers')
export class SpecialOffersResolver {
  constructor(private readonly specialOffersService: SpecialOffersService) {}

 
  @Mutation(()=>SpecialOffer)
  createSpecialOffer(@Args('createSpecialOffer') createSpecialOfferDto: CreateSpecialOfferDto) {
    return this.specialOffersService.create(createSpecialOfferDto);
  }

 
  @Query(()=>[SpecialOffer])
  findAllSpecialOffer() {
    return this.specialOffersService.findAll();
  }

 
  @Query(()=>SpecialOffer)
  findOneSpecialOffer(@Args('id',{type:()=>ID}) id: number) {
    return this.specialOffersService.findOne(id);
  }


  @Mutation(()=>SpecialOffer)
  updateSpecialOffer(@Args('id',{type:()=>ID}) id: number,
   @Args('updateSpecialOffer') updateSpecialOfferDto: UpdateSpecialOfferDto) {
    return this.specialOffersService.update(id, updateSpecialOfferDto);
  }

 
  @Mutation(()=>SpecialOffer)
  removeSpecialOffer(@Args('id',{type:()=>ID}) id: number) {
    return this.specialOffersService.remove(+id);
  }
}

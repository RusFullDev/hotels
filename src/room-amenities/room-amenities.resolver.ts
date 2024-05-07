import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomAmenitiesService } from './room-amenities.service';
import { CreateRoomAmenityDto } from './dto/create-room-amenity.dto';
import { UpdateRoomAmenityDto } from './dto/update-room-amenity.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomAmenity } from './entities/room-amenity.entity';

@Resolver('room-amenities')
export class RoomAmenitiesResolver {
  constructor(private readonly roomAmenitiesService: RoomAmenitiesService) {}

  

  @Query(()=>[RoomAmenity])
  findAllRoomAmenity() {
    return this.roomAmenitiesService.findAll();
  }

  @Query(()=>RoomAmenity)
  findOneRoomAmenity(@Args('id',{type:()=>ID}) id: number) {
    return this.roomAmenitiesService.findOne(+id);
  }


  @Mutation(()=>RoomAmenity)
  createRoomAmenity(@Args('createRoomAmenity') createRoomAmenityDto: CreateRoomAmenityDto) {
    return this.roomAmenitiesService.create(createRoomAmenityDto);
  }
  @Query(()=>RoomAmenity)
  updateRoomAmenity(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateRoomAmenity') updateRoomAmenityDto: UpdateRoomAmenityDto) {
    return this.roomAmenitiesService.update(id, updateRoomAmenityDto);
  }

  @Mutation(()=>RoomAmenity)
  removeRoomAmenity(@Args('id',{type:()=>ID}) id: number) {
    return this.roomAmenitiesService.remove(id);
  }
}

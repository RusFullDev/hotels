import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Room } from './entities/room.entity';

@Resolver('rooms')
export class RoomsResolver {
  constructor(private readonly roomsService: RoomsService) {}
  
  @Query(()=>[Room])
  findAllRoom() {
    return this.roomsService.findAll();
  }

  @Query(()=>Room)
  findOneRoom(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsService.findOne(id);
  }


  @Mutation(()=>Room)
  createRoom(@Args('createRoom') createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Mutation(()=>Room)
  updateRoom(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateRoom") updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(+id, updateRoomDto);
  }

  @Mutation(()=>Room)
  removeRoom(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsService.remove(id);
  }

  
}

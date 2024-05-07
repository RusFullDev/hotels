
import { RoomsBedTypeService } from './rooms-bed-type.service';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomsBedType } from './entities/rooms-bed-type.entity';
import { CreateRoomsBedTypeDto } from './dto/create-rooms-bed-type.dto';
import { UpdateRoomsBedTypeDto } from './dto/update-rooms-bed-type.dto';

@Resolver('rooms-bed-type')
export class RoomsBedTypeResolver {
  constructor(private readonly roomsRoomsBedTypeService: RoomsBedTypeService) {}

  @Query(()=>[RoomsBedType])
  findAllRoomsBedType() {
    return this.roomsRoomsBedTypeService.findAll();
  }

  @Query(()=>RoomsBedType)
  findOneRoomsBedType(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsRoomsBedTypeService.findOne(id);
  }


  @Mutation(()=>RoomsBedType)
  createRoomsBedType(@Args('createRoomsBedType') createRoomsBedTypeDto: CreateRoomsBedTypeDto) {
    return this.roomsRoomsBedTypeService.create(createRoomsBedTypeDto);
  }

  @Mutation(()=>RoomsBedType)
  updateRoomsBedType(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateRoomsBedType") updateRoomsBedTypeDto: UpdateRoomsBedTypeDto) {
    return this.roomsRoomsBedTypeService.update(+id, updateRoomsBedTypeDto);
  }

  @Mutation(()=>RoomsBedType)
  removeRoomsBedType(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsRoomsBedTypeService.remove(id);
  }


}

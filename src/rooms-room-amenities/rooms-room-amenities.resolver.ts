
import { RoomsRoomAmenitiesService } from './rooms-room-amenities.service';
import { CreateRoomsRoomAmenityDto } from './dto/create-rooms-room-amenity.dto';
import { UpdateRoomsRoomAmenityDto } from './dto/update-rooms-room-amenity.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomsRoomAmenity } from './entities/rooms-room-amenity.entity';

@Resolver('rooms-room-amenities')
export class RoomsRoomAmenitiesResolver {
  constructor(private readonly roomsRoomAmenitiesService: RoomsRoomAmenitiesService) {}

   @Query(()=>[RoomsRoomAmenity])
  findAllRoomsRoomAmenity() {
    return this.roomsRoomAmenitiesService.findAll();
  }

  @Query(()=>RoomsRoomAmenity)
  findOneRoomsRoomAmenity(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsRoomAmenitiesService.findOne(id);
  }


  @Mutation(()=>RoomsRoomAmenity)
  createRoomsRoomAmenity(@Args('createRoomsRoomAmenity') createRoomsRoomAmenityDto: CreateRoomsRoomAmenityDto) {
    return this.roomsRoomAmenitiesService.create(createRoomsRoomAmenityDto);
  }

  @Mutation(()=>RoomsRoomAmenity)
  updateRoomsRoomAmenity(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateRoomsRoomAmenity") updateRoomsRoomAmenityDto: UpdateRoomsRoomAmenityDto) {
    return this.roomsRoomAmenitiesService.update(+id, updateRoomsRoomAmenityDto);
  }

  @Mutation(()=>RoomsRoomAmenity)
  removeRoomsRoomAmenity(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsRoomAmenitiesService.remove(id);
  }


}

import { RoomsRoomOffersService } from './rooms-room-offers.service';
import { CreateRoomsRoomOfferDto } from './dto/create-rooms-room-offer.dto';
import { UpdateRoomsRoomOfferDto } from './dto/update-rooms-room-offer.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomsRoomOffer } from './entities/rooms-room-offer.entity';

@Resolver('rooms-room-offers')
export class RoomsRoomOffersResolver {
  constructor(private readonly roomsRoomOffersService: RoomsRoomOffersService) {}

 
  @Query(()=>[RoomsRoomOffer])
  findAllRoomsRoomOffer() {
    return this.roomsRoomOffersService.findAll();
  }

  @Query(()=>RoomsRoomOffer)
  findOneRoomsRoomOffer(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsRoomOffersService.findOne(id);
  }


  @Mutation(()=>RoomsRoomOffer)
  createRoomsRoomOffer(@Args('createRoomsRoomOffer') createRoomsRoomOfferDto: CreateRoomsRoomOfferDto) {
    return this.roomsRoomOffersService.create(createRoomsRoomOfferDto);
  }

  @Mutation(()=>RoomsRoomOffer)
  updateRoomsRoomOffer(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateRoomsRoomOffer") updateRoomsRoomOfferDto: UpdateRoomsRoomOfferDto) {
    return this.roomsRoomOffersService.update(+id, updateRoomsRoomOfferDto);
  }

  @Mutation(()=>RoomsRoomOffer)
  removeRoomsRoomOffer(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsRoomOffersService.remove(id);
  }




}

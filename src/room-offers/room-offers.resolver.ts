
import { RoomOffersService } from './room-offers.service';
import { CreateRoomOfferDto } from './dto/create-room-offer.dto';
import { UpdateRoomOfferDto } from './dto/update-room-offer.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomOffer } from './entities/room-offer.entity';

@Resolver('room-offers')
export class RoomOffersResolver {
  constructor(private readonly roomOffersService: RoomOffersService) {}

 

  @Query(()=>[RoomOffer])
  findAllRoomOffer() {
    return this.roomOffersService.findAll();
  }

  @Query(()=>RoomOffer)
  findOneRoomOffer(@Args('id',{type:()=>ID}) id: number) {
    return this.roomOffersService.findOne(id);
  }


  @Mutation(()=>RoomOffer)
  createRoomOffer(@Args('createRoomOffer') createRoomOfferDto: CreateRoomOfferDto) {
    return this.roomOffersService.create(createRoomOfferDto);
  }
  @Mutation(()=>RoomOffer)
  updateRoomOffer(@Args('id',{type:()=>ID}) id:number, 
  @Args('updateRoomOffer') updateRoomOfferDto: UpdateRoomOfferDto) {
    return this.roomOffersService.update(id, updateRoomOfferDto);
  }

  @Mutation(()=>RoomOffer)
  removeRoomOffer(@Args('id',{type:()=>ID}) id: number) {
    return this.roomOffersService.remove(id);
  }
}

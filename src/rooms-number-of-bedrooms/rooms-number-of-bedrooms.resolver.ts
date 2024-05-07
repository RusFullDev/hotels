
import { RoomsNumberOfBedroomsService } from './rooms-number-of-bedrooms.service';
import { CreateRoomsNumberOfBedroomDto } from './dto/create-rooms-number-of-bedroom.dto';
import { UpdateRoomsNumberOfBedroomDto } from './dto/update-rooms-number-of-bedroom.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomsNumberOfBedroom } from './entities/rooms-number-of-bedroom.entity';

@Resolver('rooms-number-of-bedrooms')
export class RoomsNumberOfBedroomsResolver {
  constructor(private readonly roomsNumberOfBedroomsService: RoomsNumberOfBedroomsService) {}

  @Query(()=>[RoomsNumberOfBedroom])
  findAllRoomsNumberOfBedroom() {
    return this.roomsNumberOfBedroomsService.findAll();
  }

  @Query(()=>RoomsNumberOfBedroom)
  findOneRoomsNumberOfBedroom(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsNumberOfBedroomsService.findOne(id);
  }


  @Mutation(()=>RoomsNumberOfBedroom)
  createRoomsNumberOfBedroom(@Args('createRoomsNumberOfBedroom') createRoomsNumberOfBedroomDto: CreateRoomsNumberOfBedroomDto) {
    return this.roomsNumberOfBedroomsService.create(createRoomsNumberOfBedroomDto);
  }

  @Mutation(()=>RoomsNumberOfBedroom)
  updateRoomsNumberOfBedroom(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateRoomsNumberOfBedroom") updateRoomsNumberOfBedroomDto: UpdateRoomsNumberOfBedroomDto) {
    return this.roomsNumberOfBedroomsService.update(+id, updateRoomsNumberOfBedroomDto);
  }

  @Mutation(()=>RoomsNumberOfBedroom)
  removeRoomsNumberOfBedroom(@Args('id',{type:()=>ID}) id: number) {
    return this.roomsNumberOfBedroomsService.remove(id);
  }

}

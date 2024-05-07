
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Address } from './entities/address.entity';

@Resolver('address')
export class AddressResolver{
  constructor(private readonly addressService: AddressService) {}



  @Query(()=>[Address])
  findAllAddress() {
    return this.addressService.findAll();
  }

  @Query(()=>Address)
  findOneAddress(@Args('id',{type:()=>ID}) id: number) {
    return this.addressService.findOne(+id);
  }
  @Mutation(()=>Address)
  createAddress(@Args("createAddress") createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }


  @Mutation(()=>Address)
  updateAddress(@Args('id',{type:()=>ID}) id: number,
   @Args('updateAddress') updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }


  @Mutation(()=>Address)
  removeAddress(@Args('id',{type:()=>ID}) id:number) {
    return this.addressService.remove(+id);
  }
}

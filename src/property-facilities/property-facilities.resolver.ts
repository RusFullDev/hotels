
import { PropertyFacilitiesService } from './property-facilities.service';
import { CreatePropertyFacilityDto } from './dto/create-property-facility.dto';
import { UpdatePropertyFacilityDto } from './dto/update-property-facility.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertyFacility } from './entities/property-facility.entity';

@Resolver('property-facilities')
export class PropertyFacilitiesResolver {
  constructor(private readonly propertyFacilitiesService: PropertyFacilitiesService) {}

  @Query(()=>[PropertyFacility])
  findAllPropertyFacility() {
    return this.propertyFacilitiesService.findAll();
  }

  @Query(()=>PropertyFacility)
  findOnePropertyFacility(@Args('id',{type:()=>ID}) id: number) {
    return this.propertyFacilitiesService.findOne(id);
  }

  @Mutation(()=>PropertyFacility)
  createPropertyFacility(@Args('createPropertyFacility') createPropertyFacilityDto: CreatePropertyFacilityDto) {
    return this.propertyFacilitiesService.create(createPropertyFacilityDto);
  }
  @Mutation(()=>PropertyFacility)
  updatePropertyFacility(@Args('id',{type:()=>ID}) id: number,
   @Args("updatePropertyFacility") updatePropertyFacilityDto: UpdatePropertyFacilityDto) {
    return this.propertyFacilitiesService.update(id, updatePropertyFacilityDto);
  }

  @Mutation(()=>PropertyFacility)
  removePropertyFacility(@Args('id',{type:()=>ID}) id: number) {
    return this.propertyFacilitiesService.remove(id);
  }
}

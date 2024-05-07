
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BedTypeService } from './bed-type.service';
import { CreateBedTypeDto } from './dto/create-bed-type.dto';
import { UpdateBedTypeDto } from './dto/update-bed-type.dto';
import { BedType } from './entities/bed-type.entity';

@Resolver('bed-type')
export class BedTypeResolver {
  constructor(private readonly bedTypeService: BedTypeService) {}



  @Query(()=>[BedType])
  findAllBedType() {
    return this.bedTypeService.findAll();
  }

  @Query(()=>BedType)
  findOneBedType(@Args('id',{type:()=>ID}) id: number) {
    return this.bedTypeService.findOne(id);
  }


  @Mutation(()=>BedType)
  createBedType(@Args('createBedType') createBedTypeDto: CreateBedTypeDto) {
    return this.bedTypeService.create(createBedTypeDto);
  }

  @Mutation(()=>BedType)
  updateBedType(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateBedType") updateBedTypeDto: UpdateBedTypeDto) {
    return this.bedTypeService.update(+id, updateBedTypeDto);
  }

  @Mutation(()=>BedType)
  removeBedType(@Args('id',{type:()=>ID}) id: number) {
    return this.bedTypeService.remove(id);
  }
}

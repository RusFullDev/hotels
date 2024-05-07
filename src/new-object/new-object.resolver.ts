
import { NewObjectService } from './new-object.service';
import { CreateNewObjectDto } from './dto/create-new-object.dto';
import { UpdateNewObjectDto } from './dto/update-new-object.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewObject } from './entities/new-object.entity';

@Resolver('new-object')
export class NewObjectResolver {
  constructor(private readonly newObjectService: NewObjectService) {}

 

  @Query(()=>[NewObject])
  findAllNewObject() {
    return this.newObjectService.findAll();
  }

  @Query(()=>NewObject)
  findOneNewObject(@Args('id',{type:()=>ID}) id: number) {
    return this.newObjectService.findOne(id);
  }

  @Mutation(()=>NewObject)
  createNewObject(@Args('createNewObject') createNewObjectDto: CreateNewObjectDto) {
    return this.newObjectService.create(createNewObjectDto);
  }
  @Mutation(()=>NewObject)
  updateNewObject(@Args('id',{type:()=>ID}) id: number,
   @Args('updateNewObject') updateNewObjectDto: UpdateNewObjectDto) {
    return this.newObjectService.update(id, updateNewObjectDto);
  }

  @Mutation(()=>NewObject)
  removeNewObject(@Args('id',{type:()=>ID}) id: number) {
    return this.newObjectService.remove(id);
  }
}

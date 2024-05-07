
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Res } from '@nestjs/common';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver('user')
export class UserResolver {
  constructor(private readonly userService: UserService) {}


  @Query(()=>[User])
  findAlladmin() {
    return this.userService.findAll();
  }

  @Query(()=>User)
  findOneadmin(@Args('id',{type:()=>ID}) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(()=>User)
  createUser(@Args('createUser') createUserDto: CreateUserDto,
  @Res({passthrough:true})res:Response)  {
    return this.userService.signUp(createUserDto,res);
  }

  @Mutation(()=>User)
  updateadmin(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateadmin") updateadminDto: UpdateUserDto) {
    return this.userService.update(+id, updateadminDto);
  }

  @Mutation(()=>User)
  removeadmin(@Args('id',{type:()=>ID}) id: number) {
    return this.userService.remove(id);
  }

}

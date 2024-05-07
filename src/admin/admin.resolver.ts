

import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from './entities/admin.entity';
import { Res } from '@nestjs/common';
import { Response } from 'express';

@Resolver('admin')
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}


  @Query(()=>[Admin])
  findAlladmin() {
    return this.adminService.findAll();
  }

  @Query(()=>Admin)
  findOneadmin(@Args('id',{type:()=>ID}) id: number) {
    return this.adminService.findOne(id);
  }

  @Mutation(()=>Admin)
  createAdmin(@Args('createAdmin') createAdminDto: CreateAdminDto,
  @Res({passthrough:true})res:Response)  {
    return this.adminService.signUp(createAdminDto,res);
  }

  @Mutation(()=>Admin)
  updateadmin(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateadmin") updateadminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateadminDto);
  }

  @Mutation(()=>Admin)
  removeadmin(@Args('id',{type:()=>ID}) id: number) {
    return this.adminService.remove(id);
  }

}

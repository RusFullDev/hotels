import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';

import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coment } from './entities/coment.entity';


@Resolver('coments')
export class ComentsResolver {
  constructor(private readonly comentsService: ComentsService) {}

 
  @Query(()=>[Coment])
  findAllComent() {
    return this.comentsService.findAll();
  }

 
  @Query(()=>Coment)
  findOneComent(@Args('id',{type:()=>ID}) id: number) {
    return this.comentsService.findOne(id);
  }

  @Mutation(()=>Coment)
  createComent(@Args('createComent') createComentDto: CreateComentDto) {
    return this.comentsService.create(createComentDto);
  }


  @Mutation(()=>Coment)
  updateComent(@Args('id',{type:()=>ID}) id:number, 
  @Args('updateComent') updateComentDto: UpdateComentDto) {
    return this.comentsService.update(+id, updateComentDto);
  }

  @Mutation(()=>Coment)
  removeComent(@Args('id',{type:()=>ID}) id:number) {
    return this.comentsService.remove(id);
  }
}

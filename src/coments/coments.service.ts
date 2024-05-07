import { Injectable } from '@nestjs/common';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coment } from './entities/coment.entity';

@Injectable()
export class ComentsService {
  constructor(@InjectRepository(Coment) private readonly comentRepo:Repository<Coment>){}

  create(createComentDto: CreateComentDto) {
    return this.comentRepo.save(createComentDto)
  }

  findAll() {
    return this.comentRepo.find()
  }

  findOne(id: number) {
    return this.comentRepo.findOneBy({id})
  }

  async update(id: number, updateComentDto: UpdateComentDto) {
    await this.comentRepo.update({id},updateComentDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.comentRepo.delete({id})
    return id
  }
}

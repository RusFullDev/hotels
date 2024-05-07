import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coment } from './entities/coment.entity';

@ApiTags('coments')
@Controller('coments')
export class ComentsController {
  constructor(private readonly comentsService: ComentsService) {}


  @HttpCode(201)
  @ApiOperation({ summary: 'create Coments'})
  @ApiResponse({ status: 201, type: Coment })
  @Post()
  create(@Body() createComentDto: CreateComentDto) {
    return this.comentsService.create(createComentDto);
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'FindAll Coments'})
  @ApiResponse({ status: 200, type: Coment })
  @Get()
  findAll() {
    return this.comentsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find One By ID Coments'})
  @ApiResponse({ status: 200, type: Coment })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentsService.findOne(+id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update One By ID Coments'})
  @ApiResponse({ status: 200, type: Coment })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComentDto: UpdateComentDto) {
    return this.comentsService.update(+id, updateComentDto);
  }

 
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete One By ID Coments'})
  @ApiResponse({ status: 200, type: Coment })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentsService.remove(+id);
  }
}

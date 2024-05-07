import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { BedTypeService } from './bed-type.service';
import { CreateBedTypeDto } from './dto/create-bed-type.dto';
import { UpdateBedTypeDto } from './dto/update-bed-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BedType } from './entities/bed-type.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';

@ApiTags('bed-type')
@Controller('bed-type')
export class BedTypeController {
  constructor(private readonly bedTypeService: BedTypeService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create BedType'})
  @ApiResponse({ status: 201, type: BedType })
  @Post()
  create(@Body() createBedTypeDto: CreateBedTypeDto) {
    return this.bedTypeService.create(createBedTypeDto);
  }

 
  @HttpCode(200)
  @ApiOperation({ summary: 'find All BedType'})
  @ApiResponse({ status: 200, type: BedType })
  @Get()
  findAll() {
    return this.bedTypeService.findAll();
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'find By ID BedType'})
  @ApiResponse({ status: 200, type: BedType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bedTypeService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By ID BedType'})
  @ApiResponse({ status: 200, type: BedType })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBedTypeDto: UpdateBedTypeDto) {
    return this.bedTypeService.update(+id, updateBedTypeDto);
  }
  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By ID BedType'})
  @ApiResponse({ status: 200, type: BedType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bedTypeService.remove(+id);
  }
}

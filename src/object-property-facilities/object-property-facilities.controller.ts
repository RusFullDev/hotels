import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ObjectPropertyFacilitiesService } from './object-property-facilities.service';
import { CreateObjectPropertyFacilityDto } from './dto/create-object-property-facility.dto';
import { UpdateObjectPropertyFacilityDto } from './dto/update-object-property-facility.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';


@UseGuards(AdminGuard)
@Controller('object-property-facilities')
export class ObjectPropertyFacilitiesController {
  constructor(private readonly objectPropertyFacilitiesService: ObjectPropertyFacilitiesService) {}

  @Post()
  create(@Body() createObjectPropertyFacilityDto: CreateObjectPropertyFacilityDto) {
    return this.objectPropertyFacilitiesService.create(createObjectPropertyFacilityDto);
  }

  @Get()
  findAll() {
    return this.objectPropertyFacilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectPropertyFacilitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectPropertyFacilityDto: UpdateObjectPropertyFacilityDto) {
    return this.objectPropertyFacilitiesService.update(+id, updateObjectPropertyFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectPropertyFacilitiesService.remove(+id);
  }
}

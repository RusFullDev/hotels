import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { PropertyFacilitiesService } from './property-facilities.service';
import { CreatePropertyFacilityDto } from './dto/create-property-facility.dto';
import { UpdatePropertyFacilityDto } from './dto/update-property-facility.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertyFacility } from './entities/property-facility.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';



@ApiTags('property-facilities')
@Controller('property-facilities')
export class PropertyFacilitiesController {
  constructor(private readonly propertyFacilitiesService: PropertyFacilitiesService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create PropertyFacility'})
  @ApiResponse({ status: 201, type: PropertyFacility })
  @Post()
  create(@Body() createPropertyFacilityDto: CreatePropertyFacilityDto) {
    return this.propertyFacilitiesService.create(createPropertyFacilityDto);
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'Find All PropertyFacility'})
  @ApiResponse({ status: 200, type: PropertyFacility })
  @Get()
  findAll() {
    return this.propertyFacilitiesService.findAll();
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'Find One By ID PropertyFacility'})
  @ApiResponse({ status: 200, type: PropertyFacility })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyFacilitiesService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update One By ID PropertyFacility'})
  @ApiResponse({ status: 200, type: PropertyFacility })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyFacilityDto: UpdatePropertyFacilityDto) {
    return this.propertyFacilitiesService.update(+id, updatePropertyFacilityDto);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete One By ID PropertyFacility'})
  @ApiResponse({ status: 200, type: PropertyFacility })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyFacilitiesService.remove(+id);
  }
}

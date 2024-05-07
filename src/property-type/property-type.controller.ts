import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PropertyType } from './entities/property-type.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';



@ApiTags('property-type')
@Controller('property-type')
export class PropertyTypeController {
  constructor(private readonly propertyTypeService: PropertyTypeService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create propertyType'})
  @ApiResponse({ status: 201, type: PropertyType })
  @Post()
  create(@Body() createPropertyTypeDto: CreatePropertyTypeDto) {
    return this.propertyTypeService.create(createPropertyTypeDto);
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'find all propertyType' })
  @ApiResponse({ status: 200, type: PropertyType })
  @Get()
  findAll() {
    return this.propertyTypeService.findAll();
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'find PropertyType by id' })
  @ApiResponse({ status: 200, type: PropertyType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyTypeService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update PropertyType by id' })
  @ApiResponse({ status: 200, type: PropertyType })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyTypeDto: UpdatePropertyTypeDto) {
    return this.propertyTypeService.update(+id, updatePropertyTypeDto);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete PropertyType by id' })
  @ApiResponse({ status: 200, type: PropertyType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyTypeService.remove(+id);
  }
}

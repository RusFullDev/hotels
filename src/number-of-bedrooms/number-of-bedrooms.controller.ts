import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { NumberOfBedroomsService } from './number-of-bedrooms.service';
import { CreateNumberOfBedroomDto } from './dto/create-number-of-bedroom.dto';
import { UpdateNumberOfBedroomDto } from './dto/update-number-of-bedroom.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NumberOfBedroom } from './entities/number-of-bedroom.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';


@ApiTags('number-of-bedrooms')
@Controller('number-of-bedrooms')
export class NumberOfBedroomsController {
  constructor(private readonly numberOfBedroomsService: NumberOfBedroomsService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create NumberOfBedroom'})
  @ApiResponse({ status: 201, type: NumberOfBedroom })
  @Post()
  create(@Body() createNumberOfBedroomDto: CreateNumberOfBedroomDto) {
    return this.numberOfBedroomsService.create(createNumberOfBedroomDto);
  }


  
  @HttpCode(200)
  @ApiOperation({ summary: 'find All NumberOfBedroom'})
  @ApiResponse({ status: 200, type: NumberOfBedroom })
  @Get()
  findAll() {
    return this.numberOfBedroomsService.findAll();
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'find By Id NumberOfBedroom'})
  @ApiResponse({ status: 200, type: NumberOfBedroom })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numberOfBedroomsService.findOne(+id);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By Id NumberOfBedroom'})
  @ApiResponse({ status: 200, type: NumberOfBedroom })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumberOfBedroomDto: UpdateNumberOfBedroomDto) {
    return this.numberOfBedroomsService.update(+id, updateNumberOfBedroomDto);
  }



  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By Id NumberOfBedroom'})
  @ApiResponse({ status: 200, type: NumberOfBedroom })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numberOfBedroomsService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RoomsNumberOfBedroomsService } from './rooms-number-of-bedrooms.service';
import { CreateRoomsNumberOfBedroomDto } from './dto/create-rooms-number-of-bedroom.dto';
import { UpdateRoomsNumberOfBedroomDto } from './dto/update-rooms-number-of-bedroom.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';


@UseGuards(AdminGuard)
@Controller('rooms-number-of-bedrooms')
export class RoomsNumberOfBedroomsController {
  constructor(private readonly roomsNumberOfBedroomsService: RoomsNumberOfBedroomsService) {}

  @Post()
  create(@Body() createRoomsNumberOfBedroomDto: CreateRoomsNumberOfBedroomDto) {
    return this.roomsNumberOfBedroomsService.create(createRoomsNumberOfBedroomDto);
  }

  @Get()
  findAll() {
    return this.roomsNumberOfBedroomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsNumberOfBedroomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomsNumberOfBedroomDto: UpdateRoomsNumberOfBedroomDto) {
    return this.roomsNumberOfBedroomsService.update(+id, updateRoomsNumberOfBedroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsNumberOfBedroomsService.remove(+id);
  }
}

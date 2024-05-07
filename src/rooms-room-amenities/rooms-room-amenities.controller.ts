import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RoomsRoomAmenitiesService } from './rooms-room-amenities.service';
import { CreateRoomsRoomAmenityDto } from './dto/create-rooms-room-amenity.dto';
import { UpdateRoomsRoomAmenityDto } from './dto/update-rooms-room-amenity.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';


@UseGuards(AdminGuard)
@Controller('rooms-room-amenities')
export class RoomsRoomAmenitiesController {
  constructor(private readonly roomsRoomAmenitiesService: RoomsRoomAmenitiesService) {}

  @Post()
  create(@Body() createRoomsRoomAmenityDto: CreateRoomsRoomAmenityDto) {
    return this.roomsRoomAmenitiesService.create(createRoomsRoomAmenityDto);
  }

  @Get()
  findAll() {
    return this.roomsRoomAmenitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsRoomAmenitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomsRoomAmenityDto: UpdateRoomsRoomAmenityDto) {
    return this.roomsRoomAmenitiesService.update(+id, updateRoomsRoomAmenityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsRoomAmenitiesService.remove(+id);
  }
}

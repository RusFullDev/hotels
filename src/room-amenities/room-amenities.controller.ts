import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { RoomAmenitiesService } from './room-amenities.service';
import { CreateRoomAmenityDto } from './dto/create-room-amenity.dto';
import { UpdateRoomAmenityDto } from './dto/update-room-amenity.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoomAmenity } from './entities/room-amenity.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';



@ApiTags('room-amenities')
@Controller('room-amenities')
export class RoomAmenitiesController {
  constructor(private readonly roomAmenitiesService: RoomAmenitiesService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create RoomAmenity'})
  @ApiResponse({ status: 201, type: RoomAmenity })
  @Post()
  create(@Body() createRoomAmenityDto: CreateRoomAmenityDto) {
    return this.roomAmenitiesService.create(createRoomAmenityDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'find All RoomAmenity'})
  @ApiResponse({ status: 200, type: RoomAmenity })
  @Get()
  findAll() {
    return this.roomAmenitiesService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'find One By ID RoomAmenity'})
  @ApiResponse({ status: 200, type: RoomAmenity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomAmenitiesService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update One By ID RoomAmenity'})
  @ApiResponse({ status: 200, type: RoomAmenity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomAmenityDto: UpdateRoomAmenityDto) {
    return this.roomAmenitiesService.update(+id, updateRoomAmenityDto);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete One By ID RoomAmenity'})
  @ApiResponse({ status: 200, type: RoomAmenity })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomAmenitiesService.remove(+id);
  }
}

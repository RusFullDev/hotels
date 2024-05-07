import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RoomsBedTypeService } from './rooms-bed-type.service';
import { CreateRoomsBedTypeDto } from './dto/create-rooms-bed-type.dto';
import { UpdateRoomsBedTypeDto } from './dto/update-rooms-bed-type.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';



@UseGuards(AdminGuard)
@Controller('rooms-bed-type')
export class RoomsBedTypeController {
  constructor(private readonly roomsBedTypeService: RoomsBedTypeService) {}

  @Post()
  create(@Body() createRoomsBedTypeDto: CreateRoomsBedTypeDto) {
    return this.roomsBedTypeService.create(createRoomsBedTypeDto);
  }

  @Get()
  findAll() {
    return this.roomsBedTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsBedTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomsBedTypeDto: UpdateRoomsBedTypeDto) {
    return this.roomsBedTypeService.update(+id, updateRoomsBedTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsBedTypeService.remove(+id);
  }
}

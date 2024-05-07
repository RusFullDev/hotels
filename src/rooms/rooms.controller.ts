import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Room } from './entities/room.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';


@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create Room'})
  @ApiResponse({ status: 201, type: Room })
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'find All Room'})
  @ApiResponse({ status: 200, type: Room })
  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'find One By Id Room'})
  @ApiResponse({ status: 200, type: Room })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update One By Id Room'})
  @ApiResponse({ status: 200, type: Room })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(+id, updateRoomDto);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete One By Id Room'})
  @ApiResponse({ status: 200, type: Room })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(+id);
  }
}

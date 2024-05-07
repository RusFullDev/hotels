import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RoomsRoomOffersService } from './rooms-room-offers.service';
import { CreateRoomsRoomOfferDto } from './dto/create-rooms-room-offer.dto';
import { UpdateRoomsRoomOfferDto } from './dto/update-rooms-room-offer.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';


@UseGuards(AdminGuard)
@Controller('rooms-room-offers')
export class RoomsRoomOffersController {
  constructor(private readonly roomsRoomOffersService: RoomsRoomOffersService) {}

  @Post()
  create(@Body() createRoomsRoomOfferDto: CreateRoomsRoomOfferDto) {
    return this.roomsRoomOffersService.create(createRoomsRoomOfferDto);
  }

  @Get()
  findAll() {
    return this.roomsRoomOffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsRoomOffersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomsRoomOfferDto: UpdateRoomsRoomOfferDto) {
    return this.roomsRoomOffersService.update(+id, updateRoomsRoomOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsRoomOffersService.remove(+id);
  }
}

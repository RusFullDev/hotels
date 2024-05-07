import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { RoomOffersService } from './room-offers.service';
import { CreateRoomOfferDto } from './dto/create-room-offer.dto';
import { UpdateRoomOfferDto } from './dto/update-room-offer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoomOffer } from './entities/room-offer.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';



@ApiTags('room-offers')
@Controller('room-offers')
export class RoomOffersController {
  constructor(private readonly roomOffersService: RoomOffersService) {}

  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create RoomOffer'})
  @ApiResponse({ status: 201, type: RoomOffer })
  @Post()
  create(@Body() createRoomOfferDto: CreateRoomOfferDto) {
    return this.roomOffersService.create(createRoomOfferDto);
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'get All RoomOffer'})
  @ApiResponse({ status: 200, type: RoomOffer })
  @Get()
  findAll() {
    return this.roomOffersService.findAll();
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'get By ID RoomOffer'})
  @ApiResponse({ status: 200, type: RoomOffer })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomOffersService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By ID RoomOffer'})
  @ApiResponse({ status: 200, type: RoomOffer })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomOfferDto: UpdateRoomOfferDto) {
    return this.roomOffersService.update(+id, updateRoomOfferDto);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By ID RoomOffer'})
  @ApiResponse({ status: 200, type: RoomOffer })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomOffersService.remove(+id);
  }
}

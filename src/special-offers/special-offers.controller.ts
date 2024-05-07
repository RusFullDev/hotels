import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';
import { CreateSpecialOfferDto } from './dto/create-special-offer.dto';
import { UpdateSpecialOfferDto } from './dto/update-special-offer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SpecialOffer } from './entities/special-offer.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';



@ApiTags('special-offers')
@Controller('special-offers')
export class SpecialOffersController {
  constructor(private readonly specialOffersService: SpecialOffersService) {}


  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create SpecialOffer'})
  @ApiResponse({ status: 201, type: SpecialOffer })
  @Post()
  create(@Body() createSpecialOfferDto: CreateSpecialOfferDto) {
    return this.specialOffersService.create(createSpecialOfferDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'findAll SpecialOffer'})
  @ApiResponse({ status: 201, type: SpecialOffer })
  @Get()
  findAll() {
    return this.specialOffersService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'find by id SpecialOffer'})
  @ApiResponse({ status: 201, type: SpecialOffer })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialOffersService.findOne(+id);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update by id SpecialOffer'})
  @ApiResponse({ status: 201, type: SpecialOffer })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecialOfferDto: UpdateSpecialOfferDto) {
    return this.specialOffersService.update(+id, updateSpecialOfferDto);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete by id SpecialOffer'})
  @ApiResponse({ status: 201, type: SpecialOffer })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialOffersService.remove(+id);
  }
}

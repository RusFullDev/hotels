import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Address } from './entities/address.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { SelfGuard } from 'src/common/guards/self.guard';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  
  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create Address'})
  @ApiResponse({ status: 201, type: Address })
  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }



  @HttpCode(200)
  @ApiOperation({ summary: 'Find All Address'})
  @ApiResponse({ status: 201, type: Address })
  @Get()
  findAll() {
    return this.addressService.findAll();
  }

 

  @HttpCode(200)
  @ApiOperation({ summary: 'Find By Id Address'})
  @ApiResponse({ status: 200, type: Address })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update By Id Address'})
  @ApiResponse({ status: 200, type: Address })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete By Id Address'})
  @ApiResponse({ status: 200, type: Address })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}

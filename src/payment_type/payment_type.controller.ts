import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { PaymentTypeService } from './payment_type.service';
import { CreatePaymentTypeDto } from './dto/create-payment_type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentType } from './entities/payment_type.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';




@ApiTags('payment-type')
@Controller('payment-type')
export class PaymentTypeController {
  constructor(private readonly paymentTypeService: PaymentTypeService) {}


  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create PaymentType'})
  @ApiResponse({ status: 201, type: PaymentType })
  @Post()
  create(@Body() createPaymentTypeDto: CreatePaymentTypeDto) {
    return this.paymentTypeService.create(createPaymentTypeDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'find All PaymentType'})
  @ApiResponse({ status: 200, type: PaymentType })
  @Get()
  findAll() {
    return this.paymentTypeService.findAll();
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'find By Id PaymentType'})
  @ApiResponse({ status: 200, type: PaymentType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentTypeService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By Id PaymentType'})
  @ApiResponse({ status: 200, type: PaymentType })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentTypeDto: UpdatePaymentTypeDto) {
    return this.paymentTypeService.update(+id, updatePaymentTypeDto);
  }

  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By Id PaymentType'})
  @ApiResponse({ status: 200, type: PaymentType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentTypeService.remove(+id);
  }
}

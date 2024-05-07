import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from './entities/order.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { SelfGuard } from 'src/common/guards/self.guard';



@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}


  @UseGuards(SelfGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create Order'})
  @ApiResponse({ status: 201, type:Order })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }


@UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'find All Order'})
  @ApiResponse({ status: 200, type:Order })
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }


  
  @UseGuards(SelfGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'find By ID Order'})
  @ApiResponse({ status: 200, type:Order })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }


  @UseGuards(SelfGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By ID Order'})
  @ApiResponse({ status: 200, type:Order })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By ID Order'})
  @ApiResponse({ status: 200, type:Order })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Room } from 'src/rooms/entities/room.entity';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private readonly orderRepo:Repository<Order>,
@InjectRepository(Room) private readonly roomsRepo:Repository<Room>){}

  async create(createOrderDto: CreateOrderDto) {
    let total_price;
const room = await this.roomsRepo.findOneBy({id:+createOrderDto.room_id})
if(!room){
  return this.orderRepo.save(createOrderDto)
}else{
 total_price = ((+room.price) * (+createOrderDto.day))
  return  this.orderRepo.save({...CreateOrderDto,total_price,day:createOrderDto.day})
}
  }

  async findAll() {
    const find = await this.orderRepo.find({relations:
      {payment_id:{paymentTypes:{payment_id:true}},room_id:{roomOrders:{room_id:true}}}
      // ["payment_id", "room_id"]
    // ["payment_id", "payment_id.paymentTypes", "room_id", "room_id.roomOrders"] 
    })
    return find
  }

  findOne(id: number) {
    return this.orderRepo.findOneBy({id})
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    await this.orderRepo.update({id},updateOrderDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.orderRepo.delete({id})
    return id
  }
}

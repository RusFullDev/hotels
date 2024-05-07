
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Order } from './entities/order.entity';

@Resolver('orders')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  

  @Query(()=>[Order])
  findAllOrder() {
    return this.ordersService.findAll();
  }

  @Query(()=>Order)
  findOneOrder(@Args('id',{type:()=>ID}) id:number) {
    return this.ordersService.findOne(+id);
  }
  @Mutation(()=>Order)
  createOrder(@Args('createOrder') createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Mutation(()=>Order)
  updateOrder(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateOrder') updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Mutation(()=>Order)
  removeOrder(@Args('id',{type:()=>ID}) id: number) {
    return this.ordersService.remove(+id);
  }
}

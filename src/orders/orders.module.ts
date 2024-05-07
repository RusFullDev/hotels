import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrdersResolver } from './orders.resolver';
import { Room } from 'src/rooms/entities/room.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Order,Room]),JwtModule.register({})],
  controllers: [OrdersController],
  providers: [OrdersService,OrdersResolver,JwtService],
})
export class OrdersModule {}

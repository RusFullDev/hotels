import { Module } from '@nestjs/common';
import { RoomOffersService } from './room-offers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomOffer } from './entities/room-offer.entity';
import { RoomOffersResolver } from './room-offers.resolver';
import { RoomOffersController } from './room-offers.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([RoomOffer]),JwtModule.register({})],
  controllers: [RoomOffersController],
  providers: [RoomOffersService,RoomOffersResolver,JwtService],
})
export class RoomOffersModule {}

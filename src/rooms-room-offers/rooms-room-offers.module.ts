import { Module } from '@nestjs/common';
import { RoomsRoomOffersService } from './rooms-room-offers.service';
import { RoomsRoomOffersController } from './rooms-room-offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsRoomOffer } from './entities/rooms-room-offer.entity';
import { RoomsRoomOffersResolver } from './rooms-room-offers.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([RoomsRoomOffer]),JwtModule.register({})],
  controllers: [RoomsRoomOffersController],
  providers: [RoomsRoomOffersService,RoomsRoomOffersResolver,JwtService],
})
export class RoomsRoomOffersModule {}

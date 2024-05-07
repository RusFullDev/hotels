import { Module } from '@nestjs/common';
import { RoomsRoomAmenitiesService } from './rooms-room-amenities.service';
import { RoomsRoomAmenitiesController } from './rooms-room-amenities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsRoomAmenity } from './entities/rooms-room-amenity.entity';
import { RoomsRoomAmenitiesResolver } from './rooms-room-amenities.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([RoomsRoomAmenity]),JwtModule.register({})],
  controllers: [RoomsRoomAmenitiesController],
  providers: [RoomsRoomAmenitiesService,RoomsRoomAmenitiesResolver,JwtService],
})
export class RoomsRoomAmenitiesModule {}

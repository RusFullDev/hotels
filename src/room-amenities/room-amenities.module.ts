import { Module } from '@nestjs/common';
import { RoomAmenitiesService } from './room-amenities.service';
import { RoomAmenitiesController } from './room-amenities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomAmenity } from './entities/room-amenity.entity';
import { RoomAmenitiesResolver } from './room-amenities.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([RoomAmenity]),JwtModule.register({})],
  controllers: [RoomAmenitiesController],
  providers: [RoomAmenitiesService,RoomAmenitiesResolver,JwtService],
})
export class RoomAmenitiesModule {}

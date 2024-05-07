import { Module } from '@nestjs/common';
import { RoomsBedTypeService } from './rooms-bed-type.service';
import { RoomsBedTypeController } from './rooms-bed-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsBedType } from './entities/rooms-bed-type.entity';
import { RoomsBedTypeResolver } from './rooms-bed-type.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([RoomsBedType]),JwtModule.register({})],
  controllers: [RoomsBedTypeController],
  providers: [RoomsBedTypeService,RoomsBedTypeResolver,JwtService],
})
export class RoomsBedTypeModule {}

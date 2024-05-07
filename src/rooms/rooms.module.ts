import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { RoomsResolver } from './rooms.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Room]),JwtModule.register({})],
  controllers: [RoomsController],
  providers: [RoomsService,RoomsResolver,JwtService],
})
export class RoomsModule {}

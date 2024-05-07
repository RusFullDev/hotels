import { Module } from '@nestjs/common';
import { RoomsNumberOfBedroomsService } from './rooms-number-of-bedrooms.service';
import { RoomsNumberOfBedroomsController } from './rooms-number-of-bedrooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsNumberOfBedroom } from './entities/rooms-number-of-bedroom.entity';
import { RoomsNumberOfBedroomsResolver } from './rooms-number-of-bedrooms.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([RoomsNumberOfBedroom]),JwtModule.register({})],
  controllers: [RoomsNumberOfBedroomsController],
  providers: [RoomsNumberOfBedroomsService,RoomsNumberOfBedroomsResolver,JwtService],
})
export class RoomsNumberOfBedroomsModule {}

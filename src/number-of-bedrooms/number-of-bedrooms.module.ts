import { Module } from '@nestjs/common';
import { NumberOfBedroomsService } from './number-of-bedrooms.service';
import { NumberOfBedroomsController } from './number-of-bedrooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberOfBedroom } from './entities/number-of-bedroom.entity';
import { NumberOfBedroomsResolver } from './number-of-bedrooms.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([NumberOfBedroom]),JwtModule.register({})],
  controllers: [NumberOfBedroomsController],
  providers: [NumberOfBedroomsService,NumberOfBedroomsResolver,JwtService],
})
export class NumberOfBedroomsModule {}

import { Module } from '@nestjs/common';
import { ObjectPropertyFacilitiesService } from './object-property-facilities.service';
import { ObjectPropertyFacilitiesController } from './object-property-facilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectPropertyFacility } from './entities/object-property-facility.entity';
import { ObjectPropertyFacilitiesResolver } from './object-property-facilities.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([ObjectPropertyFacility]),JwtModule.register({})],
  controllers: [ObjectPropertyFacilitiesController],
  providers: [ObjectPropertyFacilitiesService,ObjectPropertyFacilitiesResolver,JwtService],
})
export class ObjectPropertyFacilitiesModule {}

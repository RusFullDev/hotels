import { Module } from '@nestjs/common';
import { PropertyFacilitiesService } from './property-facilities.service';
import { PropertyFacilitiesController } from './property-facilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyFacility } from './entities/property-facility.entity';
import { PropertyFacilitiesResolver } from './property-facilities.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([PropertyFacility]),JwtModule.register({})],
  controllers: [PropertyFacilitiesController],
  providers: [PropertyFacilitiesService,PropertyFacilitiesResolver,JwtService],
})
export class PropertyFacilitiesModule {}

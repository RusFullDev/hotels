import { Module } from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyType } from './entities/property-type.entity';
import { PropertyTypeController } from './property-type.controller';
import { PropertyTypeResolver } from './property-type.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([PropertyType]),JwtModule.register({})],
  controllers: [PropertyTypeController],
  providers: [PropertyTypeService,PropertyTypeResolver,JwtService],
})
export class PropertyTypeModule {}

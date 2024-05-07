import { Module } from '@nestjs/common';
import { BedTypeService } from './bed-type.service';
import { BedTypeController } from './bed-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BedType } from './entities/bed-type.entity';
import { BedTypeResolver } from './bed-type.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([BedType]),JwtModule.register({})],
  controllers: [BedTypeController],
  providers: [BedTypeService,BedTypeResolver,JwtService],
})
export class BedTypeModule {}

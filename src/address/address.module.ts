import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { AddressResolver } from './address.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Address]),JwtModule.register({})],
  controllers: [AddressController],
  providers: [AddressService,AddressResolver,JwtService],
})
export class AddressModule {}

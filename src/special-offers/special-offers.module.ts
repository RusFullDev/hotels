import { Module } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';
import { SpecialOffersController } from './special-offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialOffer } from './entities/special-offer.entity';
import { SpecialOffersResolver } from './special-offers.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([SpecialOffer]),JwtModule.register({})],
  controllers: [SpecialOffersController],
  providers: [SpecialOffersService,SpecialOffersResolver,JwtService],
})
export class SpecialOffersModule {}

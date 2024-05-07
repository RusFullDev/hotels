import { Module } from '@nestjs/common';
import { PaymentTypeService } from './payment_type.service';
import { PaymentTypeController } from './payment_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentType } from './entities/payment_type.entity';
import { PaymentTypeResolver } from './payment_type.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([PaymentType]),JwtModule.register({})],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService,PaymentTypeResolver,JwtService],
})
export class PaymentTypeModule {}

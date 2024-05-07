import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coment } from './entities/coment.entity';
import { ComentsResolver } from './coments.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Coment]),JwtModule.register({})],
  controllers: [ComentsController],
  providers: [ComentsService,ComentsResolver,JwtService],
})
export class ComentsModule {}

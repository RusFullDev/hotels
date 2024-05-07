import { Module } from '@nestjs/common';
import { NewObjectService } from './new-object.service';
import { NewObjectController } from './new-object.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewObject } from './entities/new-object.entity';
import { NewObjectResolver } from './new-object.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([NewObject]),JwtModule.register({})],
  controllers: [NewObjectController],
  providers: [NewObjectService,NewObjectResolver,JwtService],
})
export class NewObjectModule {}

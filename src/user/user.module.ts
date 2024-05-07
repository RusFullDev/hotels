import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';




@Module({
  imports:[TypeOrmModule.forFeature([User]),JwtModule.register({}),
],
  controllers: [UserController],
  providers: [UserService,UserResolver,JwtService,Logger],
})
export class UserModule {}

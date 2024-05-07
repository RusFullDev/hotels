import { Logger, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { AdminResolver } from './admin.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MailModule } from 'src/mail/mail.module';




@Module({
  imports:[TypeOrmModule.forFeature([Admin]),JwtModule.register({}),
  MailModule,

],
  controllers: [AdminController],
  providers: [AdminService,AdminResolver,JwtService,Logger],
})
export class AdminModule {}

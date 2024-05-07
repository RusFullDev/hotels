import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, UseGuards, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { CookieGetter } from 'src/common/decorators';
import { UserGuard } from 'src/common/guards/user.guard';
import { LoginUserDto } from './dto/login-user.dro';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { SelfGuard } from 'src/common/guards/self.guard';
import { AdminCreatorGuard } from 'src/common/guards/creator.guard';
import { AdminGuard } from 'src/common/guards/admin.guard';



@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 
  @HttpCode(201)
  @ApiOperation({ summary: 'create User'})
  @ApiResponse({ status: 201, type: User })
  @Post('signUp')
  create(@Body() createUserDto: CreateUserDto,
  @Res({passthrough:true})res:Response) {
    return this.userService.signUp(createUserDto,res);
  }


  
  @Post('signIn')
  signIn(@Body() loginUserDto: LoginUserDto,
  @Res({passthrough:true})res:Response) {
    return this.userService.signIn(loginUserDto,res);
  }

@Post('logout')
async logout(
@CookieGetter('refresh_token') refreshToken:string,
@Res({passthrough:true}) res:Response){
  return this.userService.logout(refreshToken,res)
}


@Post(':id/refresh')
async refresh(
  @Param('id') id: number,
  @CookieGetter('refresh_token')
  refreshToken: string,
  @Res({ passthrough: true })
  res: Response,
) {
  return this.userService.reshreshToken(+id, refreshToken, res);
}




@UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'find All User'})
  @ApiResponse({ status: 200, type: User })
  @Get()
  findAll() {
    return this.userService.findAll();
  }


  @UseGuards(SelfGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'find By ID User'})
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }


  @UseGuards(SelfGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By ID User'})
  @ApiResponse({ status: 200, type: User })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }




  @UseGuards(SelfGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By ID User'})
  @ApiResponse({ status: 200, type: User })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

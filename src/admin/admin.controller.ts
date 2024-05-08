import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, UseGuards, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './entities/admin.entity';
import { Response } from 'express';
import { LoginAdminrDto } from './dto/login-admin.dro';
import { CookieGetter } from 'src/common/decorators';
import { AdminCreatorGuard } from 'src/common/guards/creator.guard';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { SelfAdminGuard } from 'src/common/guards/selfadmin.guard';


@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

//  @UseGuards(AdminCreatorGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create Admin'})
  @ApiResponse({ status: 201, type: Admin })
  @Post('signUp')
  create(@Body() createAdminDto: CreateAdminDto,
  @Res({passthrough:true})res:Response) {
    return this.adminService.signUp(createAdminDto,res);
  }


  
  @Post('signIn')
  signIn(@Body() loginAdminDto: LoginAdminrDto,
  @Res({passthrough:true})res:Response) {
    return this.adminService.signIn(loginAdminDto,res);
  }

@Post('logout')
async logout(
@CookieGetter('refresh_token') refreshToken:string,
@Res({passthrough:true}) res:Response){
  return this.adminService.logout(refreshToken,res)
}


@Post(':id/refresh')
async refresh(
  @Param('id') id: number,
  @CookieGetter('refresh_token')
  refreshToken: string,
  @Res({ passthrough: true })
  res: Response,
) {
  return this.adminService.reshreshToken(+id, refreshToken, res);
}


@Get('activate/:link')
async activate(@Param('link') link: string) {
  return this.adminService.activate(link);
}




@UseGuards(AdminCreatorGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'find All Admin'})
  @ApiResponse({ status: 200, type: Admin })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(SelfAdminGuard)
  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'find By ID Admin'})
  @ApiResponse({ status: 200, type: Admin })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(SelfAdminGuard)
  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'update By ID Admin'})
  @ApiResponse({ status: 200, type: Admin })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }



  @UseGuards(SelfAdminGuard)
  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'delete By ID Admin'})
  @ApiResponse({ status: 200, type: Admin })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}

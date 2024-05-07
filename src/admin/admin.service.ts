import { BadRequestException, ForbiddenException, Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import * as bcrypt from 'bcryptjs'
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { Response } from 'express';
import {v4} from 'uuid'
import { LoginAdminrDto } from './dto/login-admin.dro';



@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private readonly adminRepo:Repository<Admin>,

  private readonly jwtService: JwtService,
  private readonly logger:Logger,
 
    private readonly mailService:MailService
  ){}
/*********************************getToken******************************************** */
async getTokens(admin:Admin){
  const payload = {
  id:admin.id,
  is_active:admin.is_active,
  is_creator:admin.is_creator

  };

  const [accessToken, refreshToken] = await Promise.all([
    this.jwtService.signAsync(payload, {
      secret: process.env.ACCESS_TOKEN_KEY,
      expiresIn: process.env.ACCESS_TOKEN_TIME,
    }),
    this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_TOKEN_KEY,
      expiresIn: process.env.REFRESH_TOKEN_TIME,
    }),
  ]);
  return {
    access_token: accessToken,
    refresh_token: refreshToken,
  };
}


/*******************************************Registration == SignUp********************************* */
 async signUp(createAdminDto: CreateAdminDto,res:Response) {
  try {
    
const {password,confirm_password} = createAdminDto
if(password != confirm_password){
  throw new BadRequestException('password is incorrect')
}
const hashed_password = await bcrypt.hash(password,7)
const admin = await this.adminRepo.save({...createAdminDto,hashed_password})
const activation_link = v4()
const findAdmin = await this.findOne(admin.id)
if(!findAdmin){
throw new BadRequestException("Admin not found")
}
const newAdmin = await this.adminRepo.save({...admin,activation_link})
await this.mailService.sendMail(newAdmin);

const result = {
  name:newAdmin.fullname,
  email:newAdmin.email,
  }
  return result


  } catch (error) {
    console.log(error);
    this.logger.log('Calling signUp()',AdminService.name)
    this.logger.debug('Calling signUp()',AdminService.name)
    this.logger.verbose('Calling signUp()',AdminService.name)
    this.logger.warn('Calling signUp()',AdminService.name)
  }
  }

/*******************************************signIn=login****************************************** */


async signIn(loginAdminDto:LoginAdminrDto,res:Response){

  try {
const {email,password} = loginAdminDto
const admin = await this.adminRepo.findOneBy({email})
if(!admin){
throw new BadRequestException("Admin not found")
}
const passwordMatch = await bcrypt.compare(password,admin.hashed_password)
if(!passwordMatch)
  {throw new BadRequestException("Password not match")}

const tokens = await this.getTokens(admin)
const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)

const findAdmin = await this.findOne(admin.id)
if(!findAdmin){
throw new BadRequestException("Admin not found")
}
const newAdmin = await this.adminRepo.save({...admin,hashed_refresh_token})

res.cookie('refresh_token',tokens.refresh_token,{
  maxAge:Number(process.env.COOKIE_TIME),
  httpOnly:true
})
return newAdmin

  } catch (error) {
    console.log(error); 
    this.logger.log('Calling signIn()',AdminService.name)
    this.logger.debug('Calling signIn()',AdminService.name)
    this.logger.verbose('Calling signIn()',AdminService.name)
    this.logger.warn('Calling signIn()',AdminService.name)
  }
}
/*************************************activeta*************************************** */
async activate(link:string){
  if(!link){
    throw new BadRequestException('Activation link is required');
  }
  const activeAdmin = await this.adminRepo.update({activation_link:link,is_active:false},{is_active:true})
  if(!activeAdmin ){
    throw new BadRequestException('Activation link is invalid');
  }
  const response = {
    message: 'Admin activated successfully',
    // admin: activeAdmin,
  };
  return response

}

/***********************************************logout ************************/

async logout(refreshToken:string,res:Response){
  try {
    const adminVerify = await this.jwtService.verify(refreshToken,{
      secret:process.env.REFRESH_TOKEN_KEY
    })
    if(!adminVerify){
      throw new ForbiddenException('Admin not verified')
    }
    const findAdmin = await this.adminRepo.findOneBy({id:adminVerify.id})
    if(!findAdmin){
      throw new BadRequestException("Token not found")
    }
    
    const updatedAdmin = await this.adminRepo.save({...findAdmin,hashed_refresh_token:"null"})
    
    res.clearCookie('refresh_token')
    const response = {
      message:'Admin logged out successfully',
      tokens:updatedAdmin.hashed_refresh_token
    }
    return response
  } catch (error) {
    console.log(error);
    this.logger.log('Calling logout',AdminService.name)
    this.logger.debug('Calling logout',AdminService.name)
    this.logger.verbose('Calling logout',AdminService.name)
    this.logger.warn('Calling logout',AdminService.name)
    
  }
}
/***********************************************refreshToken*********************************** */
async reshreshToken(adminId:number,refreshToken:string,res:Response){
  try {
    const decodedToken = await this.jwtService.decode(refreshToken)
  if(adminId != decodedToken['id']){
    throw new BadRequestException('Server not found')
  }
  const admin = await this.adminRepo.findOneBy({id:adminId})

  if(!admin || !admin.hashed_refresh_token){
    throw new BadRequestException('admin not found')
  }
  const tokenMatch = await bcrypt.compare(refreshToken,admin.hashed_refresh_token)
  if(!tokenMatch){
    throw new ForbiddenException('Forbidden');
  }

  const tokens = await this.getTokens(admin)
  const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)

  const updateAdmin = await this.adminRepo.save({...admin,hashed_refresh_token})
  res.cookie('refresh_token',tokens.refresh_token,{
    maxAge:Number(process.env.REFRESH_TIME),
    httpOnly:true
  })

  const response = {
    tokens
  }
  return response
  } catch (error) {
    console.log(error);
    this.logger.log('Calling RefreshToken',AdminService.name)
    this.logger.debug('Calling RefreshToken',AdminService.name)
    this.logger.verbose('Calling RefreshToken',AdminService.name)
    this.logger.warn('Calling RefreshToken',AdminService.name)
    
  }
  
}

  findAll() {
    return this.adminRepo.find()
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({id})
  }




async update(id: number, updateAdminDto: UpdateAdminDto) {
  try {
  const {password,new_password,confirm_new_password} = updateAdminDto
const admin = await this.findOne(id)
if(!admin){
throw new BadRequestException("Admin not found")
}
console.log(password);
let hashed_password = admin.hashed_password
const passwordMatch = await bcrypt.compare(password,hashed_password)
if(!passwordMatch)
{
  throw new BadRequestException('password not match')
}
if(new_password !== confirm_new_password){
  throw new  BadRequestException('new password is incorrect')
}
 hashed_password = await bcrypt.hash(new_password,7)
await this.adminRepo.update({id},{...admin,hashed_password})
return this.findOne(id)

  } catch (error) {
    console.log(error);
    this.logger.log('Calling Change password',AdminService.name)
    this.logger.debug('Calling Change password',AdminService.name)
    this.logger.verbose('Calling Change password',AdminService.name)
    this.logger.warn('Calling Change password',AdminService.name)
  }

}


  async remove(id: number) {
const adminDel = await this.findOne(id)
if(!adminDel){
  throw new BadRequestException("Admin not found")
}
await this.adminRepo.delete({id})
    return id
  }
}

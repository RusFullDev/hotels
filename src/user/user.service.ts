import { BadRequestException, ForbiddenException, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import {v4} from 'uuid'
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dro';
import { UpdateUserDto } from './dto/update-user.dto';




@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>,
  private readonly jwtService: JwtService,
  private readonly logger:Logger,
 
   
  ){}
/*********************************getToken******************************************** */
async getTokens(user:User){
  const payload = {
  id:user.id,
  nickName:user.nickName

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
 async signUp(createUserDto: CreateUserDto,res:Response) {
  try {
    
const {password,confirm_password} = createUserDto
if(password != confirm_password){
  throw new BadRequestException('password is incorrect')
}
const hashed_password = await bcrypt.hash(password,7)
const user = await this.userRepo.save({...createUserDto,hashed_password})

const tokens = await this.getTokens(user)

const hashed_refresh_token  = await bcrypt.hash(tokens.refresh_token,7)
const activation_link = v4()

const findUser = await this.findOne(user.id)

if(!findUser){
throw new BadRequestException("User not found")
}
const newUser = await this.userRepo.save({...user,hashed_refresh_token ,activation_link})


res.cookie('refresh_token',tokens.refresh_token,{
  maxAge:Number(process.env.COOKIE_TIME),
  httpOnly:true
})

const result = {
  name:newUser.name,
  email:newUser.email,
  tokens
  }
  return result
  } catch (error) {
    console.log(error);
    this.logger.log('Calling signUp()',UserService.name)
    this.logger.debug('Calling signUp()',UserService.name)
    this.logger.verbose('Calling signUp()',UserService.name)
    this.logger.warn('Calling signUp()',UserService.name)
  }
  }

/*******************************************signIn=login****************************************** */


async signIn(loginUserDto:LoginUserDto,res:Response){

  try {
const {email,password} = loginUserDto
const user = await this.userRepo.findOneBy({email})
if(!user){
throw new BadRequestException("User not found")
}
const passwordMatch = await bcrypt.compare(password,user.hashed_password)
if(!passwordMatch)
  {throw new BadRequestException("Password not match")}

const tokens = await this.getTokens(user)
const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)

const findUser = await this.findOne(user.id)
if(!findUser){
throw new BadRequestException("User not found")
}
const newUser = await this.userRepo.save({...user,hashed_refresh_token})

res.cookie('refresh_token',tokens.refresh_token,{
  maxAge:Number(process.env.COOKIE_TIME),
  httpOnly:true
})
return newUser
  } catch (error) {
    console.log(error); 
    this.logger.log('Calling signIn()',UserService.name)
    this.logger.debug('Calling signIn()',UserService.name)
    this.logger.verbose('Calling signIn()',UserService.name)
    this.logger.warn('Calling signIn()',UserService.name)
  }
}


/***********************************************logout ************************/

async logout(refreshToken:string,res:Response){
  try {
    const userVerify = await this.jwtService.verify(refreshToken,{
      secret:process.env.REFRESH_TOKEN_KEY
    })
    if(!userVerify){
      throw new ForbiddenException('User not verified')
    }
    const findUser = await this.userRepo.findOneBy({id:userVerify.id})
    if(!findUser){
      throw new BadRequestException("Token not found")
    }
    
    const updatedUser = await this.userRepo.save({...findUser,hashed_refresh_token:"null"})
    
    res.clearCookie('refresh_token')
    const response = {
      message:'User logged out successfully',
      tokens:updatedUser.hashed_refresh_token
    }
    return response
  } catch (error) {
    console.log(error);
    this.logger.log('Calling Logout',UserService.name)
    this.logger.debug('Calling Logout',UserService.name)
    this.logger.verbose('Calling Logout',UserService.name)
    this.logger.warn('Calling Logout',UserService.name)
    
  }
}
/***********************************************refreshToken*********************************** */
async reshreshToken(userId:number,refreshToken:string,res:Response){
  try {
    const decodedToken = await this.jwtService.decode(refreshToken)
  if(userId != decodedToken['id']){
    throw new BadRequestException('Server not found')
  }
  const user = await this.userRepo.findOneBy({id:userId})

  if(!user || !user.hashed_refresh_token){
    throw new BadRequestException('user not found')
  }
  const tokenMatch = await bcrypt.compare(refreshToken,user.hashed_refresh_token)
  if(!tokenMatch){
    throw new ForbiddenException('Forbidden');
  }

  const tokens = await this.getTokens(user)
  const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)

  const updateUser = await this.userRepo.save({...user,hashed_refresh_token})
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
    this.logger.log('Calling refreshToken',UserService.name)
    this.logger.debug('Calling refreshToken',UserService.name)
    this.logger.verbose('Calling refreshToken',UserService.name)
    this.logger.warn('Calling refreshToken',UserService.name)
    
  }
  
}

  findAll() {
    return this.userRepo.find()
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({id})
  }




async update(id: number, updateUserDto: UpdateUserDto) {

  try {
    const {password,confirm_new_password,new_password} = updateUserDto
const user = await this.findOne(id)

if(!user){
  throw new BadRequestException('user not found')
}

const userMatch = await bcrypt.compare(password,user.hashed_password)
if(!userMatch){
  throw new BadRequestException('password not match')
}

if(new_password != confirm_new_password){
  throw new BadRequestException('password is incorrect')
}
const hashed_password = await bcrypt.hash(new_password,7)

await this.userRepo.update({id},{...user,hashed_password})
return this.findOne(id)
  } catch (error) {
    console.log(error);
    this.logger.log('Calling Update',UserService.name)
    this.logger.debug('Calling Update',UserService.name)
    this.logger.verbose('Calling Update',UserService.name)
    this.logger.warn('Calling Update',UserService.name)
  }

}

  


  async remove(id: number) {
const userDel = await this.findOne(id)
if(!userDel){
  throw new BadRequestException("User not found")
}
await this.userRepo.delete({id})
    return id
  }
}

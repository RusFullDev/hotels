import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

@InputType()
export class UpdateAdminDto{
    @Field({nullable:true})
    @ApiProperty({example:"Alisher Usmonov",description:"Fullname"})
    @IsOptional()
    @IsString()
    fullname?:string


    @Field({nullable:true})
    @ApiProperty({example:"903091541",description:"phone number"})
    @IsOptional()
    @IsPhoneNumber('UZ')
    phone?:string


    @Field({nullable:true})
    @ApiProperty({example:"urinrust@gmail.com",description:"email"})
    @IsOptional()
    @IsEmail()
    email?:string

    @Field({nullable:true})
    @ApiProperty({example:"12345",description:"password"})
    @IsOptional()
    @IsString()
    password:string


    @ApiProperty({example:"12345",description:"password"})
    @Field({nullable:true})
    @IsOptional()
    @IsString()
    new_password:string

    @ApiProperty({example:"12345",description:"password"})
    @Field({nullable:true})
    @IsOptional()
    @IsString()
    confirm_new_password:string
   
}

import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

@InputType()
export class CreateAdminDto {
    @Field()
    @ApiProperty({example:"Alisher Usmonov",description:"Fullname"})
    @IsString()
    @IsNotEmpty()
    fullname :string


    @Field()
    @ApiProperty({example:"903091541",description:"phone number"})
    @IsPhoneNumber('UZ')
    @IsNotEmpty()
    phone:string


    @Field()
    @ApiProperty({example:"urinrust@gmail.com",description:"email"})
    @IsEmail()
    @IsNotEmpty()
    email:string

    @Field()
    @ApiProperty({example:"12345",description:"password"})
    @IsString()
    @IsNotEmpty()
    password:string


    @ApiProperty({example:"12345",description:"password"})
    @Field()
    @IsString()
    @IsNotEmpty()
    confirm_password:string

    @IsOptional()
    @IsBoolean()
    is_active?:boolean

    @IsBoolean()
    @IsOptional()
    is_creator?:boolean
 
}

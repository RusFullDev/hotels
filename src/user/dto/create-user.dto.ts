import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

@InputType()
export class CreateUserDto {
    @Field()
    @ApiProperty({example:"Alisher",description:"name"})
    @IsString()
    @IsNotEmpty()
    name :string

    @Field()
    @ApiProperty({example:"Alisher",description:"nickName"})
    @IsString()
    @IsNotEmpty()
    nickName :string


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
}

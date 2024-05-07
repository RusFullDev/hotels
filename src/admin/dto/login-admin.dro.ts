import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

@InputType()
export class LoginAdminrDto {
    @ApiProperty({example:"nodir@gmail.com",description:"User email"})
    @Field()
    @IsEmail()
    email:string

    @ApiProperty({example:"12345",description:"User parol"})
    @Field()
    @IsString()
    password:string

}

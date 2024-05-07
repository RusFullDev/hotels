

import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";

@InputType()
export class UpdateSpecialOfferDto {
    @Field({nullable:true})
    @ApiProperty({example:"50% discount",description:"50% discount or more,2X AgodaCASH,Secret offers"})
    @IsString()
    name?:string
}

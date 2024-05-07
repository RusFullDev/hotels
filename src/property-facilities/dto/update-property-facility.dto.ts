import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";

@InputType()
export class UpdatePropertyFacilityDto {
    @Field({nullable:true})
    @ApiProperty({example:"Swimming pool",description:"internet,car park,Restaurants,Airport transfer"})
    @IsString()
    name?:string
}

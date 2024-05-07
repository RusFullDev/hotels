


import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {IsString } from "class-validator";

@InputType()
export class UpdateBedTypeDto  {
    
    @Field({nullable:true})
    @ApiProperty({example:"single",description:"double,king,queen"})
    @IsString()
    name?:string
}

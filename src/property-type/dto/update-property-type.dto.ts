import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {IsString } from "class-validator";

@InputType()
export class UpdatePropertyTypeDto{

    @Field({nullable:true})
    @ApiProperty({example:"hotel",description:"hotel,hostel,homestay,capsule hotel,entire villa ..."})
    @IsString()
    name?:string
}

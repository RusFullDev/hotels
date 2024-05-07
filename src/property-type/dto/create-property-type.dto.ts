import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreatePropertyTypeDto {
    @Field()
    @ApiProperty({example:"hotel",description:"hotel,hostel,homestay,capsule hotel,entire villa ..."})
    @IsString()
    @IsNotEmpty()
    name:string
}

import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreatePropertyFacilityDto {
    @Field()
    @ApiProperty({example:"Swimming pool",description:"internet,car park,Restaurants,Airport transfer"})
    @IsString()
    @IsNotEmpty()
    name:string
}

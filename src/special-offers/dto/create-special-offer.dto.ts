
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateSpecialOfferDto {
    @Field()
    @ApiProperty({example:"50% discount",description:"50% discount or more,2X AgodaCASH,Secret offers"})
    @IsString()
    @IsNotEmpty()
    name:string
}

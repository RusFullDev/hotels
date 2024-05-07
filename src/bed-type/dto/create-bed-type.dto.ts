
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateBedTypeDto {
    
    @Field()
    @ApiProperty({example:"single",description:"double,king,queen"})
    @IsString()
    @IsNotEmpty()
    name:string
}

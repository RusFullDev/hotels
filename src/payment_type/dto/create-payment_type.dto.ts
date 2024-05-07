import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class CreatePaymentTypeDto {
    @Field()
    @ApiProperty({example:"Card",description:"payments type"})
    @IsString()
    @IsNotEmpty()
    name:string
}

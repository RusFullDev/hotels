
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class UpdatePaymentTypeDto {
    @Field({nullable:true})
    @ApiProperty({example:"Card",description:"payments type"})
    @IsString()
    name?:string
}

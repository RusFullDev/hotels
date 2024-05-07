import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class UpdateNumberOfBedroomDto {

    @Field({nullable:true})
    @ApiProperty({example:"2 bedrooms",description:"1 bedroom/studio"})
    @IsString()
    name?:string
}
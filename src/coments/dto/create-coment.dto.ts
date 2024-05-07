

import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateComentDto {
    @Field()
    @ApiProperty({example:"alisher",description:"name"})
    @IsString()
    @IsNotEmpty()
    name:string

    @Field()
    @ApiProperty({example:"zo'r hotel",description:"coments"})
    @IsString()
    @IsNotEmpty()
    coment:string
}

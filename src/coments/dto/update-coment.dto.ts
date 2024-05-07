
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class UpdateComentDto {
    @Field({nullable:true})
    @ApiProperty({example:"alisher",description:"name"})
    @IsString()
    name?:string

    @Field({nullable:true})
    @ApiProperty({example:"zo'r hotel",description:"coments"})
    @IsString()
    coment?:string
}

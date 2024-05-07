

import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

@InputType()
export class UpdateRoomOfferDto {
    @Field({nullable:true})
    @ApiProperty({example:"breakfast included",description:"dinner included,lunch included"})
    @IsString()
    name?:string
}

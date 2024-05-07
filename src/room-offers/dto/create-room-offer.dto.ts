

import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateRoomOfferDto {
    @Field()
    @ApiProperty({example:"breakfast included",description:"dinner included,lunch included"})
    @IsString()
    @IsNotEmpty()
    name:string
}

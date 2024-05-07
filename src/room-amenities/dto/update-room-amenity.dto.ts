


import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";



@InputType()
export class UpdateRoomAmenityDto {
    @Field({nullable:true})
    @ApiProperty({example:"private pool",description:"heating,TV,Washing mashine,internet access"})
    @IsString()
    name?:string
}

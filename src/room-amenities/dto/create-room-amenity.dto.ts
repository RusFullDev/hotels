import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



@InputType()
export class CreateRoomAmenityDto {
    @Field()
    @ApiProperty({example:"private pool",description:"heating,TV,Washing mashine,internet access"})
    @IsString()
    @IsNotEmpty()
    name:string
}

import { Field, ID, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreateRoomDto {
    @Field()
    @ApiProperty({example:"luxury",description:"rooms are type"})
    @IsString()
    name:string

    @Field()
    @ApiProperty({example:"1000",description:" room price"})
    @IsNumber()
    price:number
}

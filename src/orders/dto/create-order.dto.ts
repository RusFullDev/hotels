import { Field, ID, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

@InputType()
export class CreateOrderDto {
    @ApiProperty({example:"1",description:"day:1,2,3,4,...."})
    @Field()
    @IsNumber()
    day:number

    @ApiProperty({example:"1",description:"ID unique"})
    @Field(()=>ID)
    @IsNumber()
    room_id:object

    @ApiProperty({example:"1",description:"ID unique"})
    @Field(()=>ID)
    @IsNumber()
    payment_id:object

    // @ApiProperty({example:"day + price",description:"total_price = day + price"})
    // @Field({nullable:true})
    // @IsNumber()
    // total_price?:number
}

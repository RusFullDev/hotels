import { Field, ID, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreateAddressDto {
    @Field()
    @ApiProperty({example:"Uzbekistan",description:"region"})
    @IsString()
    region:string

    @Field()
    @ApiProperty({example:"Tashkent",description:"district"})
    @IsString()
    district:string

    @Field()
    @ApiProperty({example:"Avayxon",description:"street"})
    @IsString()
    street:string

    @Field(()=>ID)
    @ApiProperty({example:"1",description:"ID"})
    @IsNumber()
    objects_id:object
}

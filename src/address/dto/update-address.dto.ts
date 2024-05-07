
import { Field, ID, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class UpdateAddressDto {
    @Field({nullable:true})
    @ApiProperty({example:"Uzbekistan",description:"region"})
    @IsString()
    region?:string

    @Field({nullable:true})
    @ApiProperty({example:"Tashkent",description:"district"})
    @IsString()
    district?:string

    @Field({nullable:true})
    @ApiProperty({example:"Avayxon",description:"street"})
    @IsString()
    street?:string

    @Field(()=>ID,{nullable:true})
    @ApiProperty({example:"1",description:"ID"})
    @IsNumber()
    objects_id?:object
}
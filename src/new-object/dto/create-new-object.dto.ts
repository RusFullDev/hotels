import { Field, ID, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreateNewObjectDto {
@Field()
@ApiProperty({example:"Hotel Uzbekistan",description:"Hotels name"})
@IsString()
name:string


@Field(()=>ID)
@ApiProperty({example:1,description:" unique ID"})
@IsNumber()
propertyType_id:object


@Field(()=>ID)
@ApiProperty({example:1,description:" unique ID"})
@IsNumber()
specialOffer_id:object


@Field(()=>ID)
@ApiProperty({example:1,description:" unique ID"})
@IsNumber()
objectPropertyFacilities_id:object


@Field(()=>ID)
@ApiProperty({example:1,description:" unique ID"})
@IsNumber()
comment_id:object


@Field()
@ApiProperty({description:"Locatsiya"})
@IsString()
location:string


@Field(()=>ID)
@ApiProperty({example:1,description:" unique ID"})
@IsNumber()
room_id:object
}

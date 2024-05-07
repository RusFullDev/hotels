import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoomsBedTypeDto {
@Field(()=>ID)
room_id:object

@Field(()=>ID)
bed_type_id:object

}

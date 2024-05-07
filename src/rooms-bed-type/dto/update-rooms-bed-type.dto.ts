

import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateRoomsBedTypeDto {
@Field(()=>ID,{ nullable:true})
room_id?:object

@Field(()=>ID,{nullable:true})
bed_type_id?:object

}

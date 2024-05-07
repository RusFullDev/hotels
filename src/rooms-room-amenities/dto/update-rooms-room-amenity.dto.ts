
import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateRoomsRoomAmenityDto {
@Field(()=>ID,{nullable:true})
room_id?:object

@Field(()=>ID,{nullable:true})
room_amenities_id?:object

}

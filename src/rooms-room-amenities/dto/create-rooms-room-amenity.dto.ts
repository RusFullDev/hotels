import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoomsRoomAmenityDto {
@Field(()=>ID)
room_id:object

@Field(()=>ID)
room_amenities_id:object

}

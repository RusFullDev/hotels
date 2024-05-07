import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoomsRoomOfferDto {
@Field(()=>ID)
room_id:object

@Field(()=>ID)
room_offers_id:object

}

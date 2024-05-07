
import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateRoomsRoomOfferDto {
@Field(()=>ID,{nullable:true})
room_id?:object

@Field(()=>ID,{nullable:true})
room_offers_id?:object

}
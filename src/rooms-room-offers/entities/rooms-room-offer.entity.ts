import { Field, ID, ObjectType } from "@nestjs/graphql";
import { RoomOffer } from "src/room-offers/entities/room-offer.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RoomsRoomOffer {

@Field(()=>ID)
@PrimaryGeneratedColumn()
id:number


@ManyToOne(()=>Room,(data)=>data.roomRoomOffers)
@Field(()=>Room)
room_id:Room


@ManyToOne(()=>RoomOffer,(data)=>data.offersRoom)
@Field(()=>RoomOffer)
room_offers_id:RoomOffer
}

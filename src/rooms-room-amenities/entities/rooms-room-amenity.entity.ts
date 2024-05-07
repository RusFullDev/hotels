
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { RoomAmenity } from "src/room-amenities/entities/room-amenity.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RoomsRoomAmenity {
@Field(()=>ID)
@PrimaryGeneratedColumn()
id:number


@ManyToOne(()=>Room,(data)=>data.roomAmenties)
@Field(()=>Room)
room_id:Room



@ManyToOne(()=>RoomAmenity,(data)=>data.amenitiesRooms)
@Field(()=>RoomAmenity)
room_amenities_id:RoomAmenity
}

import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BedType } from "src/bed-type/entities/bed-type.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RoomsBedType {

@Field(()=>ID)
@PrimaryGeneratedColumn()
id:number


@ManyToOne(()=>Room,(data)=>data.roomsBedTypes)
@Field(()=>Room)
room_id:Room



@ManyToOne(()=>BedType,(data)=>data.bedTypes)
@Field(()=>BedType)
bed_type_id:BedType
}

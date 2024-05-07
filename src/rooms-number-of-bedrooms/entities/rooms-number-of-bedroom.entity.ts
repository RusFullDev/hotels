import { Field, ID, ObjectType } from "@nestjs/graphql";
import { NumberOfBedroom } from "src/number-of-bedrooms/entities/number-of-bedroom.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RoomsNumberOfBedroom {
@Field(()=>ID)
@PrimaryGeneratedColumn()
id:number


@ManyToOne(()=>Room,(data)=>data.roomsNumberOfBedrooms)
@Field(()=>Room)
room_id:Room


@ManyToOne(()=>NumberOfBedroom,(data)=>data.numbersOfBedroms)
@Field(()=>NumberOfBedroom)
room_number_bedrooms_id:NumberOfBedroom
}

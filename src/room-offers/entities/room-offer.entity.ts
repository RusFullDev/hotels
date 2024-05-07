

import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomsRoomOffer } from "src/rooms-room-offers/entities/rooms-room-offer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RoomOffer {

    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"breakfast included",description:"dinner included,lunch included"})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>RoomsRoomOffer,(data)=>data.room_offers_id)
    @Field(()=>[RoomsRoomOffer])
    offersRoom:RoomsRoomOffer[]
}

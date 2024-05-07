


import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomsRoomAmenity } from "src/rooms-room-amenities/entities/rooms-room-amenity.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity()
export class RoomAmenity {

    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"Washing mashine",description:"heating,TV,Washing mashine,internet access..."})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>RoomsRoomAmenity,(data)=>data.room_amenities_id)
    @Field(()=>[RoomsRoomAmenity])
    amenitiesRooms:RoomsRoomAmenity[]
}

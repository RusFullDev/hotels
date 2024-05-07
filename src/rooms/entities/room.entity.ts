import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewObject } from "src/new-object/entities/new-object.entity";
import { Order } from "src/orders/entities/order.entity";
import { RoomsBedType } from "src/rooms-bed-type/entities/rooms-bed-type.entity";
import { RoomsNumberOfBedroom } from "src/rooms-number-of-bedrooms/entities/rooms-number-of-bedroom.entity";
import { RoomsRoomAmenity } from "src/rooms-room-amenities/entities/rooms-room-amenity.entity";
import { RoomsRoomOffer } from "src/rooms-room-offers/entities/rooms-room-offer.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Room {
    @ApiProperty({example:"1",description:" unique ID"})
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"luxury",description:"rooms are type"})
    @Field()
    @Column()
    name:string

    @ApiProperty({example:1000,description:"room price"})
    @Field()
    @Column()
    price:number
   
    @OneToMany(()=>NewObject,(data)=>data.room_id)
    @Field(()=>[NewObject])
    newObjectroom:NewObject[]

    @OneToMany(()=>Order,(data)=>data.room_id)
    @Field(()=>[Order])
    roomOrders:Order[]

    @OneToMany(()=>RoomsRoomOffer,(data)=>data.room_id)
    @Field(()=>[RoomsRoomOffer])
    roomRoomOffers:RoomsRoomOffer[]

    @OneToMany(()=>RoomsRoomAmenity,(data)=>data.room_id)
    @Field(()=>[RoomsRoomAmenity])
    roomAmenties:RoomsRoomAmenity[]

    @OneToMany(()=>RoomsBedType,(data)=>data.room_id)
    @Field(()=>[RoomsBedType])
    roomsBedTypes:RoomsBedType[]

    @OneToMany(()=>RoomsNumberOfBedroom,(data)=>data.room_id)
    @Field(()=>[RoomsNumberOfBedroom ])
    roomsNumberOfBedrooms:RoomsNumberOfBedroom[]
}

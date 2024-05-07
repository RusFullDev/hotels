import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentType } from "src/payment_type/entities/payment_type.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Order {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"1",description:"day:1,2,3,4,...."})
    @Field()
    @Column({default:1})
    day:number

    @ApiProperty({type:()=>Room})
    @ManyToOne(()=>Room,(data)=>data.roomOrders)
    @Field(()=>Room)
    room_id:Room

    @ApiProperty({type:()=>PaymentType})
    @ManyToOne(()=>PaymentType,(data)=>data.paymentTypes)
    @Field(()=>PaymentType)
    payment_id:PaymentType

    @ApiProperty({example:"0",description:"total_price = day * price"})
    @Field()
    @Column({default:0})
    total_price:number
}

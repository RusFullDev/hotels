
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity()
export class PaymentType {

    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"Card",description:"payments type"})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>Order,(data)=>data.payment_id)
    @Field(()=>[Order])
    paymentTypes:Order[]
}



import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomsBedType } from "src/rooms-bed-type/entities/rooms-bed-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class BedType {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"single",description:"double,king,queen"})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>RoomsBedType,(data)=>data.bed_type_id)
    @Field(()=>[RoomsBedType])
    bedTypes:RoomsBedType[]
}



import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomsNumberOfBedroom } from "src/rooms-number-of-bedrooms/entities/rooms-number-of-bedroom.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity()
export class NumberOfBedroom {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"2 bedrooms",description:"1 bedroom/studio"})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>RoomsNumberOfBedroom,(data)=>data.room_number_bedrooms_id)
    @Field(()=>[RoomsNumberOfBedroom])
    numbersOfBedroms:RoomsNumberOfBedroom[]
}

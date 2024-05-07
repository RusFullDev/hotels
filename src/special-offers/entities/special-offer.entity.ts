import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewObject } from "src/new-object/entities/new-object.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class SpecialOffer {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"50% discount",description:"50% discount or more,2X AgodaCASH,Secret offers"})
    @Field()
    @Column()
    name:string



@ManyToOne(()=>NewObject,(data)=>data.specialOffer_id)
@Field(()=>[NewObject])
newObjects:NewObject[]
}

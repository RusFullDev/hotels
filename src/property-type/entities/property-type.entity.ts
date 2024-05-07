import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewObject } from "src/new-object/entities/new-object.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity()
export class PropertyType {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"hotel",description:"hotel,hostel,homestay,capsule hotel,entire villa ..."})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>NewObject,(data)=>data.propertyType_id)
    @Field(()=>[NewObject])
    newObject:NewObject[]

}

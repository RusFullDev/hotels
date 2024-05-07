
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectPropertyFacility } from "src/object-property-facilities/entities/object-property-facility.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class PropertyFacility {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"Swimming pool",description:"internet,car park,Restaurants,Airport transfer"})
    @Field()
    @Column()
    name:string

    @OneToMany(()=>ObjectPropertyFacility,(data)=>data.propertyFacilities_id)
    @Field(()=>[ObjectPropertyFacility])
    objectProperties:ObjectPropertyFacility[]
}

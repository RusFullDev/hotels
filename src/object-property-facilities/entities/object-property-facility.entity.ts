import { Field, ID, ObjectType } from "@nestjs/graphql";
import { NewObject } from "src/new-object/entities/new-object.entity";
import { PropertyFacility } from "src/property-facilities/entities/property-facility.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class ObjectPropertyFacility {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    
    @ManyToOne(()=>NewObject,(data)=>data.objectPropertyFac)
    @Field(()=>NewObject)
    object_id:NewObject
    
    @Field(()=>ID)
    @ManyToOne(()=>PropertyFacility,(data)=>data.objectProperties)
    @Field(()=>PropertyFacility)
    propertyFacilities_id:PropertyFacility

   
}

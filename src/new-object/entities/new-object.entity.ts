import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Address } from "src/address/entities/address.entity";
import { Coment } from "src/coments/entities/coment.entity";
import { ObjectPropertyFacility } from "src/object-property-facilities/entities/object-property-facility.entity";
import { PropertyType } from "src/property-type/entities/property-type.entity";
import { Room } from "src/rooms/entities/room.entity";
import { SpecialOffer } from "src/special-offers/entities/special-offer.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class NewObject {


@ApiProperty({ example: 1, description: 'ID unikal raqami' })
@Field(()=>ID)
@PrimaryGeneratedColumn()
id:number

 
@ApiProperty({example:"Hotel Uzbekistan",description:"Hotels name"})
@Field()
@Column()
name:string


@ApiProperty({type:()=>PropertyType})
@ManyToOne(()=>PropertyType,(data)=>data.newObject)
@Field(()=>PropertyType)
propertyType_id:PropertyType



@ApiProperty({type:()=>SpecialOffer})
@ManyToOne(()=>SpecialOffer,(data)=>data.newObjects)
@Field(()=>SpecialOffer)
specialOffer_id:SpecialOffer

@ApiProperty({type:()=>Coment})
@ManyToOne(()=>Coment,(data)=>data.newObjectcoments)
@Field(()=>Coment)
comment_id:Coment


@ApiProperty({description:"Locatsiya"})
@Field()
@Column()
location:string


@ApiProperty({type:()=>Room})
@ManyToOne(()=>Room,(data)=>data.newObjectroom)
@Field(()=>Room)
room_id:Room


@OneToMany(()=>Address,(data)=>data.objects_id)
@Field(()=>[Address])
objectAddress:Address[]

@OneToMany(()=>ObjectPropertyFacility,(data)=>data.object_id)
@Field(()=>[ObjectPropertyFacility])
objectPropertyFac:ObjectPropertyFacility[]
}

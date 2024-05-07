import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewObject } from "src/new-object/entities/new-object.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Address {
  @Field(()=>ID)
  @ApiProperty({example:"1",description:"Unical ID"})
   @PrimaryGeneratedColumn()
   id:number

    @Field()
    @ApiProperty({example:"Uzbekistan",description:"region"})
    @Column()
    region:string

    @Field()
    @ApiProperty({example:"Tashkent",description:"district"})
    @Column()
    district:string

    @Field()
    @ApiProperty({example:"Avayxon",description:"street"})
    @Column()
    street:string

    
    @ApiProperty({type:()=>NewObject})
    @ManyToOne(()=>NewObject,(data)=>data.objectAddress)
    @Field(()=>NewObject)
    objects_id:NewObject
}


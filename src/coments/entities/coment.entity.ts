import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewObject } from "src/new-object/entities/new-object.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Coment {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({example:"Alisher",description:"name"})
    @Field()
    @Column()
    name:string


    @ApiProperty({example:"zo'r hotel",description:"coments"})
    @Field()
    @Column()
    coment:string

    @OneToMany(()=>NewObject,(data)=>data.comment_id)
    @Field(()=>[NewObject])
    newObjectcoments:NewObject[]
    
}

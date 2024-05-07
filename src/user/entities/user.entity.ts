import { Field, ID, ObjectType } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class User {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
     id:number


     @ApiProperty({example:"Alisher",description:"name"})
     @Field()
     @Column()
      name :string
      @ApiProperty({example:"Alisherchik",description:"nickName"})
      @Field()
      @Column({unique:true})
       nickName :string

    @ApiProperty({example:"903091541",description:"phone number"})
    @Field()
    @Column()
    phone:string

    @ApiProperty({example:"1223344",description:"password"})
    @Field()
    @Column()
    hashed_password:string

    @ApiProperty({example:"urinrust@gmail.com",description:"email"})
    @Field()
    @Column({unique:true})
    email:string

    @ApiProperty({description:"hashed refresh token"})
    @Field()
    @Column({default:"null"})
    hashed_refresh_token:string

   
}

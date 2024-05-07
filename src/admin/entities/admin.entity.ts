import { Field, ID, ObjectType } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Admin {
    @ApiProperty({ example: 1, description: 'ID unikal raqami' })
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
     id:number


     @ApiProperty({example:"Alisher Usmonov",description:"Fullname"})
     @Field()
     @Column()
    fullname :string

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

    @ApiProperty({description:"is active?"})
    @Field()
    @Column({default:false})
    is_active:boolean

    @ApiProperty({description:"is creater?"})
    @Field()
    @Column({default:false})
    is_creator:boolean

    @ApiProperty({description:"activation link"})
    @Field()
    @Column({default:"null"})
    activation_link:string
}

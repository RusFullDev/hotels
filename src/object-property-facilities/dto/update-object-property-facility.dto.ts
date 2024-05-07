import { Field, ID, InputType } from "@nestjs/graphql"

@InputType()
export class UpdateObjectPropertyFacilityDto{
    @Field(()=>ID,{nullable:true})
    object_id?:object

    @Field(()=>ID,{nullable:true})
    propertyFacilities_id?:object
}

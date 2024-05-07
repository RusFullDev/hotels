import { Field, ID, InputType } from "@nestjs/graphql"

@InputType()
export class CreateObjectPropertyFacilityDto {
    @Field(()=>ID)
    object_id:object
    
    @Field(()=>ID)
    propertyFacilities_id:object
}

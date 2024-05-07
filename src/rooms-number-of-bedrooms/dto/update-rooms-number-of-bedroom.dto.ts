

import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class  UpdateRoomsNumberOfBedroomDto {
    @Field(()=>ID,{nullable:true})
    room_id?:object
    
    @Field(()=>ID,{nullable:true})
    room_number_bedrooms_id?:object
    
}

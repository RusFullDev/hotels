import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoomsNumberOfBedroomDto {
    @Field(()=>ID)
    room_id:object
    
    @Field(()=>ID)
    room_number_bedrooms_id:object
    
}

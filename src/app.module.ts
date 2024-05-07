import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyTypeModule } from './property-type/property-type.module';
import { SpecialOffersModule } from './special-offers/special-offers.module';
import { ComentsModule } from './coments/coments.module';
import { PaymentTypeModule } from './payment_type/payment_type.module';
import { PropertyFacilitiesModule } from './property-facilities/property-facilities.module';
import { RoomOffersModule } from './room-offers/room-offers.module';
import { RoomAmenitiesModule } from './room-amenities/room-amenities.module';
import { BedTypeModule } from './bed-type/bed-type.module';
import { NumberOfBedroomsModule } from './number-of-bedrooms/number-of-bedrooms.module';
import { AddressModule } from './address/address.module';
import { ObjectPropertyFacilitiesModule } from './object-property-facilities/object-property-facilities.module';
import { OrdersModule } from './orders/orders.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoomsRoomOffersModule } from './rooms-room-offers/rooms-room-offers.module';
import { RoomsRoomAmenitiesModule } from './rooms-room-amenities/rooms-room-amenities.module';
import { RoomsBedTypeModule } from './rooms-bed-type/rooms-bed-type.module';
import { RoomsNumberOfBedroomsModule } from './rooms-number-of-bedrooms/rooms-number-of-bedrooms.module';
import { NewObjectModule } from './new-object/new-object.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';






@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:".env",isGlobal:true}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:'schema.gql',
      sortSchema:true,
      playground:true
    }),
    TypeOrmModule.forRoot({
      type:"postgres",
      host:process.env.PG_HOST,
      port:Number(process.env.PG_PORT),
      username:process.env.PG_USER,
      password:process.env.PG_PASSWORD,
      database:process.env.PG_DB,
      entities:[
        __dirname+'dist/**/*.entity{.ts,.js}'
      ],
      synchronize:true,
      autoLoadEntities: true,
      logging:true

    }),

    PropertyTypeModule,
    SpecialOffersModule,
    ComentsModule,
    PaymentTypeModule,
    PropertyFacilitiesModule,
    RoomOffersModule,
    RoomAmenitiesModule,
    BedTypeModule,
    NumberOfBedroomsModule,
    AddressModule,
    ObjectPropertyFacilitiesModule,
    OrdersModule,
    RoomsModule,
    RoomsRoomOffersModule,
    RoomsRoomAmenitiesModule,
    RoomsBedTypeModule,
    RoomsNumberOfBedroomsModule,
    NewObjectModule,
    AdminModule,
    UserModule
  
 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

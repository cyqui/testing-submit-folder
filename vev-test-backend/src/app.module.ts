import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ChargeStationModule } from "./chargeStations/charge-station.module";

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB
  }), ChargeStationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

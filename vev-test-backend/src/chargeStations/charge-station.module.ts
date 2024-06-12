import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ChargeStation, ChargeStationSchema } from "./schemas/chargeStation.schema";
import { ChargeStationService } from "./charge-station.service";
import { ChargeStationController } from "./charge-station.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:  ChargeStation.name,
        schema: ChargeStationSchema
      }
    ])
  ],
  providers: [
    ChargeStationService
  ],
  controllers: [
    ChargeStationController
  ],
})
export class ChargeStationModule {}

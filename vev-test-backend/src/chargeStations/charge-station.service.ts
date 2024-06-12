
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { ChargeStation } from "./schemas/chargeStation.schema";
import { CreateChargeStationDto } from "./create-charge-station.dto";

@Injectable()
export class ChargeStationService {
  constructor(
    @InjectModel(ChargeStation.name)
    private model: Model<ChargeStation>
  ) {

  }
  findAll(): Promise<ChargeStation[]> {
    return this.model.find().exec();
  }

  create(dto: CreateChargeStationDto): Promise<ChargeStation> {
    return this.model.create({...dto, inUse: false});
  }
}

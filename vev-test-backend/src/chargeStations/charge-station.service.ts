
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from 'mongoose';
import { ChargeStation } from "./schemas/chargeStation.schema";
import { CreateChargeStationDto } from "./dtos/create-charge-station.dto";
import { UpdateChargeStationDto } from "./dtos/update-charge-station.dto";


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

  async delete(_id: string): Promise<boolean> {
    const op = await this.model.deleteOne({ _id })
      .exec();
    return op.deletedCount === 1;
  }

  async update(dto: UpdateChargeStationDto): Promise<ChargeStation | boolean> {
    const { _id } = dto;
    // Not good practice, side effect on caller ( time.. )
    delete dto._id;
    // Ensure there is not already two stations besides this one
    if (dto.inUse) {
      const count = await this.model.countDocuments({inUse: true, _id: {$ne: new Types.ObjectId(_id.toString())}})
      // limit of two stations at most.
      if (count === 2) {
        return false;
      }
    }
    const res = await this.model.updateOne({ _id }, {...dto}).exec();
    // todo error handling using res
    return this.model.findOne({ _id }).exec();
  }
}

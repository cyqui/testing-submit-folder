import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChargeStationDocument = HydratedDocument<ChargeStation>;

@Schema()
export class ChargeStation {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true,  })
  brand: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  inUse: boolean;

  @Prop({ required: true })
  power: number;
}

export const ChargeStationSchema = SchemaFactory.createForClass(ChargeStation);

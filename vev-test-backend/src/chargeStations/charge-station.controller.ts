import { Body, Controller, Get, Post } from "@nestjs/common";
import { ChargeStationService } from "./charge-station.service";
import { CreateChargeStationDto } from "./create-charge-station.dto";
import { ChargeStation } from "./schemas/chargeStation.schema";

@Controller('charge-stations')
export class ChargeStationController {
  constructor(
    private readonly chargeStationSvc: ChargeStationService
  ) {}

  @Get()
  list() {
    return this.chargeStationSvc.findAll();
  }

  @Post()
  create(@Body() createStationDto: CreateChargeStationDto) {
    return this.chargeStationSvc.create(createStationDto);
  }
}

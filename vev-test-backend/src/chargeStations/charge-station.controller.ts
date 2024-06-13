import { Body, Controller, Put, Delete, Get, Param, Post } from "@nestjs/common";
import { ChargeStationService } from "./charge-station.service";
import { CreateChargeStationDto } from "./dtos/create-charge-station.dto";
import { UpdateChargeStationDto } from "./dtos/update-charge-station.dto";

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
  async create(@Body() createStationDto: CreateChargeStationDto) {
    return await this.chargeStationSvc.create(createStationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.chargeStationSvc.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string,
               @Body() updateStationDto: UpdateChargeStationDto) {
    return await this.chargeStationSvc.update(updateStationDto);
  }
}

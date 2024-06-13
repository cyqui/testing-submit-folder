import {InjectionToken} from "@angular/core";
import {ChargingStation} from "../core/types";

export const VEV_API_CONFIG = new InjectionToken<VevApiConfiguration>('ENDPOINTS_CONFIG')


export interface VevApiEndpoints {
  chargeStationList: () => string;
  chargeStationDelete: (station: ChargingStation) => string;
  chargeStationUpdate: (station: ChargingStation) => string;
  chargeStationCreate: () => string;
}

export interface VevApiConfiguration {
  apiRoot: string;
  endpoints: VevApiEndpoints;
}

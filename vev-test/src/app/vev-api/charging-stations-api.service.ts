import { Injectable } from '@angular/core';
import {ChargingStation, Maybe} from "../core/types";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChargingStationsApiService {
  stations: ChargingStation[] = [
    { name: 'station 1', model: 'x', brand: 'x', power: 12, inUse: false },
    { name: 'station 2', model: 'x', brand: 'x', power: 12, inUse: true},
    { name: 'station 3', model: 'x', brand: 'x', power: 12, inUse: true },
  ];

  constructor() { }

  find(): Observable<ChargingStation[]> {
    console.log('Find ', this.stations);
    return of(this.stations);
  }

  create(station: ChargingStation): Observable<Maybe<ChargingStation>>  {
    this.stations.push(station);
    return of(station);
  }
}

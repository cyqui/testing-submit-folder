import {Inject, Injectable} from '@angular/core';
import {ChargingStation, isSameStation, Maybe} from "../core/types";
import {catchError, map, Observable, of} from "rxjs";
import {VEV_API_CONFIG, VevApiConfiguration, VevApiEndpoints} from "./types";
import {HttpClient} from "@angular/common/http";
import {VevApiModule} from "./vev-api.module";

@Injectable({
  providedIn: VevApiModule
})
export class ChargingStationsApiService {

  constructor(
    @Inject(VEV_API_CONFIG)
    private config: VevApiConfiguration,
    private http: HttpClient
  ) {
  }

  find(): Observable<ChargingStation[]> {
    const { apiRoot,
      endpoints: { chargeStationList }
    } = this.config;
    return this.http
      .get<ChargingStation[]>(
        apiRoot+chargeStationList()
      );
  }

  create(station: ChargingStation): Observable<Maybe<ChargingStation>>  {
    const { apiRoot,
      endpoints: { chargeStationCreate }
    } = this.config;
    return this.http.post<ChargingStation>(
      apiRoot+chargeStationCreate(),
        station
      ).pipe(
        // Log error and convert to void value of monad.
        catchError(e => {
        console.error(e);
        return of(null);
      }));
  }

  setInUse(station: ChargingStation, value: boolean): Observable<Maybe<ChargingStation>> {
    const { apiRoot,
      endpoints: { chargeStationUpdate }
    } = this.config;
    return this.http.put<ChargingStation>(
      apiRoot+chargeStationUpdate(station),
      {...station, inUse: value}
    ).pipe(
      // Log error and convert to void value of monad.
      catchError(e => {
        console.error(e);
        return of(null);
      }));
  }

  delete(station: ChargingStation): Observable<boolean> {
    const { apiRoot,
      endpoints: { chargeStationDelete }
    } = this.config;
    return this.http.delete<ChargingStation>(
      apiRoot+chargeStationDelete(station)
    ).pipe(
      // any non error response is ok
      map(r => true),
      // Log error and convert to false
      catchError(e => {
        console.error(e);
        return of(false);
      }));
  }
}

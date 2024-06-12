import {Component} from '@angular/core';
import {ChargingStationsApiService} from "../../vev-api/charging-stations-api.service";
import {ChargingStation} from "../../core/types";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {
  stations$: Observable<ChargingStation[]> = of([]);

  constructor(
    private mainApi: ChargingStationsApiService
  ) {
  }

  ngOnInit() {
    this.stations$ = this.mainApi.find();
  }

  create(station: ChargingStation) {
    debugger;
    console.log(station);
  }
}

import {Component, ViewChild} from '@angular/core';
import {ChargingStationsApiService} from "../../vev-api/charging-stations-api.service";
import {ChargingStation} from "../../core/types";
import {first, Observable, of} from "rxjs";
import {TableComponent} from "./table/table.component";
import {MatDialog} from "@angular/material/dialog";
import {StopAndDeletePromptComponent} from "./stop-and-delete-prompt/stop-and-delete-prompt.component";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {
  stations$: Observable<ChargingStation[]> = of([]);
  _table: TableComponent;
  // out of time to rework. It's dirty i know and i should probably have used dataSource :(
  @ViewChild('table') set table(content: TableComponent) {
    if(content) { // initially setter gets called with undefined
      this._table = content;
    }
  }
  constructor(
    private mainApi: ChargingStationsApiService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.stations$ = this.mainApi.find();
  }

  start(station: ChargingStation) {
    this.mainApi.setInUse(station, true).pipe(first()).subscribe(r => {
      this.stations$ = this.mainApi.find();
      this.reRenderTable();
    });
  }

  stop(station: ChargingStation) {
    this.mainApi.setInUse(station, false).pipe(first()).subscribe(r => {
      this.stations$ = this.mainApi.find();
      this.reRenderTable();
    });
  }

  delete(station: ChargingStation) {
    if (station.inUse) {
      this.dialog.open(StopAndDeletePromptComponent)
    } else {
      this.mainApi.delete(station).pipe(first()).subscribe(r => {
        this.stations$ = this.mainApi.find();
      });
    }
  }

  create(station: ChargingStation) {
    this.mainApi.create(station).pipe(first()).subscribe(r => {
      this.stations$ = this.mainApi.find();
    });
  }
  // out of time to rework. It's dirty i know and i should probably have used dataSource :(
  reRenderTable() {
    this._table.renderRows();
  }
}

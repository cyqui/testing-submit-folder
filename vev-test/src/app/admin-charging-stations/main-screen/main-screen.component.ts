import {Component, ViewChild} from '@angular/core';
import {ChargingStationsApiService} from "../../vev-api/charging-stations-api.service";
import {ChargingStation} from "../../core/types";
import {first, Observable, of} from "rxjs";
import {TableComponent} from "./table/table.component";
import {MatDialog} from "@angular/material/dialog";
import {StopAndDeletePromptComponent} from "./stop-and-delete-prompt/stop-and-delete-prompt.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.stations$ = this.mainApi.find();
  }
  // factorise duration
  snack(message: string) {
    this.snackBar.open(message, undefined, {duration: 5000});
  }

  start(station: ChargingStation) {
    this.snackBar.open('Creating charge station.')
    this.mainApi.setInUse(station, true).pipe(first()).subscribe(r => {
      if (!r) {
        this.snack('! Charge cannot start (at most 2 stations) !');
      } else {
        this.snack('Charge started');
      }
      this.stations$ = this.mainApi.find();
    });
  }

  stop(station: ChargingStation) {
    this.mainApi.setInUse(station, false).pipe(first()).subscribe(r => {
      this.stations$ = this.mainApi.find();
      // this.reRenderTable();
      this.snack('Charge stopped');
    });
  }

  delete(station: ChargingStation) {
    if (station.inUse) {
      this.dialog.open(StopAndDeletePromptComponent)
    } else {
      this.mainApi.delete(station).pipe(first()).subscribe(r => {
        this.stations$ = this.mainApi.find();
        this.snack('Charge station has been successfully removed !');
      });
    }
  }

  create(station: ChargingStation) {
    this.mainApi.create(station).pipe(first()).subscribe(r => {
      this.stations$ = this.mainApi.find();
      this.snack('Charge station added');
    });
  }
  // out of time to rework. It's dirty i know and i should probably have used dataSource :(
  reRenderTable() {
    this._table.renderRows();
  }
}

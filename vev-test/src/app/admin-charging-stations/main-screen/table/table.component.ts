import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ChargingStation} from "../../../core/types";
import {first, Observable, of, tap} from "rxjs";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-charging-stations-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  columnsToDisplay: string[] = ['name', 'brand', 'model', 'power', 'status', 'actions' ];
  @ViewChild(MatTable) table: MatTable<ChargingStation>;

  @Input()
  stations$: Observable<ChargingStation[]> = of([]);

  @Output()
  start: EventEmitter<ChargingStation> = new EventEmitter<ChargingStation>();

  @Output()
  stop: EventEmitter<ChargingStation> = new EventEmitter<ChargingStation>();

  @Output()
  delete: EventEmitter<ChargingStation> = new EventEmitter<ChargingStation>();

  // out of time to rework. It's dirty i know and i should have use dataSource :(
  renderRows() {
    this.table.renderRows();
  }
}

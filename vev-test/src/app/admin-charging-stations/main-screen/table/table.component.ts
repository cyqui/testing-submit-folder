import {Component, Input} from '@angular/core';
import {ChargingStation} from "../../../core/types";
import {first, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-charging-stations-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  columnsToDisplay: string[] = ['name', 'brand', 'model', 'power', 'status', 'actions' ];

  @Input()
  stations$: Observable<ChargingStation[]> = of([]);
}

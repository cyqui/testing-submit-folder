import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChargingStationsRoutingModule } from './admin-charging-stations-routing.module';
import { MainScreenComponent } from './main-screen/main-screen.component';
import {AdminUiModule} from "../admin-ui/admin-ui.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {TableComponent} from "./main-screen/table/table.component";
import {FormComponent} from "./main-screen/form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {VevApiModule} from "../vev-api/vev-api.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const matModules = [
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    MainScreenComponent,
    TableComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    AdminChargingStationsRoutingModule,
    AdminUiModule,
    FormsModule,
    ReactiveFormsModule,
    VevApiModule,
    ...matModules,
  ]
})
export class AdminChargingStationsModule { }

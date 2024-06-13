import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ChargingStationsApiService} from "./charging-stations-api.service";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
})
export class VevApiModule { }

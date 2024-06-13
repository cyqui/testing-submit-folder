import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminChargingStationsModule} from "./admin-charging-stations/admin-charging-stations.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {VEV_API_CONFIG} from "./vev-api/types";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminChargingStationsModule
    ],
  providers: [
    provideAnimationsAsync(),
    // The place where we decouple APP config from API
    {
      provide: VEV_API_CONFIG,
      useValue: environment.vev,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainScreenComponent} from "./main-screen/main-screen.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminChargingStationsRoutingModule { }

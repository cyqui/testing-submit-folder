import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainScreenComponent} from "./admin-charging-stations/main-screen/main-screen.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../admin-charging-stations/main-screen/table/table.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  exports: [
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminUiModule { }

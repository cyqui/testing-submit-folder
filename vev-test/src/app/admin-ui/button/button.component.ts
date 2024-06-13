import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  danger: boolean = false;

  @Input()
  formButton: boolean = false;

  @Input()
  submit: boolean | string = false;

  @Input()
  disabled: boolean | string = false

  @Output()
  click: EventEmitter<void> = new EventEmitter<void>();

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChargingStation} from "../../../core/types";

@Component({
  selector: 'app-charging-stations-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Input()
  station: ChargingStation = {} as ChargingStation;

  @Output()
  submit: EventEmitter<ChargingStation> = new EventEmitter<ChargingStation>();

  /**
   * • Nom
   * • Modèle : Ne peut contenir que des chiffres et des lettres.
   * • Marque : 20 caractères maximum, uniquement des lettres.
   * • Puissance : Maximum de 22 kW, minimum de 5 kW.
   * • Statut : Peut être AVAILABLE ou CHARGING.
   */
  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    model: new FormControl('', [
      Validators.required,
      Validators.pattern(/[A-Za-z0-9]/g),
    ]),
    brand: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(/[a-zA-Z]/g),
    ]),
    power: new FormControl('', [
      Validators.required,
      Validators.min(5),
      Validators.max(22),
    ]),
  });

  constructor() {
    // testing
    this.form.setValue({
      name: 'ok',
      brand: 'okok',
      model: 'okok',
      power: 5
    });
  }

  ngOnInit(): void {
    this.form.reset(this.station);
  }

  doSubmit() {
    this.submit.emit(this.form.value);
  }

  hasError(fieldName: string, errorType: string|null = null): Boolean {
    // if it hasn't been changed, we dont want to show errors.
    if (!this.form.get(fieldName)?.touched) {
      return false;
    }
    // has the field any errors regardless of type ?
    if (fieldName && !errorType) {
      return this.form.get(fieldName)?.invalid || false;
    }
    // ternary for compiler check ( at this point errorType is always defined. )
    return errorType ?
      (this.form.get(fieldName)?.hasError(errorType) || false) : false;
  }
}

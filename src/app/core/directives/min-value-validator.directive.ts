import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinValueValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: MinValueValidatorDirective, multi: true}
  ]
})
export class MinValueValidatorDirective implements Validator {

  @Input('appMinValueValidator') minValue: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return this.minValueValidation(control);
  }

  minValueValidation(control: AbstractControl) {

    if((control.value != null) && (this.minValue > control.value)) {
      return {
        minValue: this.minValue
      }
    }
    return null;
  }

}

import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS } from '@angular/forms';
import { EqualMatchValidate } from './equal-match.validator';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ConfirmEqualValidatorDirective, multi: true }
  ]
})
export class ConfirmEqualValidatorDirective {

  @Input('appConfirmEqualValidator') equalMatch: string[];
  constructor() { 
    this.equalMatch = [];
  }
  public validate(formGroup: FormGroup) {
    return EqualMatchValidate(this.equalMatch[0], this.equalMatch[1])(formGroup);
  }
}

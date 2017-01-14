import {AbstractControl, ValidatorFn} from '@angular/forms';

export class AppValidate {
  static validateInput (): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return {'valid': true};
    }
  }
}

import {
  AbstractControl,
  AsyncValidatorFn,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

export class AsyncCustomValidator {
  static AsyncCheckExistName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      let member = ['anita', 'amy', 'bob'];
      let result: Observable<ValidationErrors | null> = of(null);
      let value = control.value;
      if (member.find((m) => m.toLocaleLowerCase) == value.toLowerCase()) {
        result = of({
          CheckExistName: {
            actualValue: value,
            requiredValue: `${value}為已存在使用者名稱，請修改為其他使用者名稱`,
          },
        });
      }
      return result;
    };
  }
}

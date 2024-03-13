import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class CustomValidators {
  static CheckExistName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let member = ['anita', 'amy', 'bob'];
      let result = null;
      let value = control.value;
      if (member.includes(value.toLowerCase())) {
        console.log(value.toLowerCase());
        result = {
          CheckExistName: {
            actualValue: value,
            requiredValue: `${value}為已存在使用者名稱，請修改為其他使用者名稱`,
          },
        };
      }
      return result;
    };
  }

  static EqualValue(ctl1Name: string, ctl2Name: string): ValidatorFn {
    return (fg: AbstractControl): ValidationErrors | null => {
      let ctl1 = <FormGroup>fg.get(ctl1Name);
      let ctl2 = <FormGroup>fg.get(ctl2Name);
      let result = null;
      if (ctl1 == null || ctl2 == null) return result;

      let value1 = ctl1?.value;
      let value2 = ctl2?.value;
      if (value1 !== value2) {
        result = {
          EqualValue: {
            actualValue: `value1:${value1},value2:${value2}`,
            requiredValue: `${ctl1Name}與${ctl2Name}必須為相同`,
          },
        };
        ctl2.setErrors(result);
      }
      return result;
    };
  }
}

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper-page',
  templateUrl: './stepper-page.component.html',
  styles: [],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false,
        showError: true,
      },
    },
  ],
})
export class StepperPageComponent {
  @ViewChild(MatStepper) stepper: MatStepper | any;
  SetNext() {
    this.stepper.selected.completed = true; //是否完成
    this.stepper.selected.editable = false; //是否可再編輯
    this.stepper.next(); //下一步
  }

  signUpForm: FormGroup;
  checkPWD: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.checkPWD = new FormGroup({
      userPwdCheck: new FormControl('', Validators.required),
    });
  }

  pwdIsCheck: boolean = true;
  checkPassword(confirmPWDValue: string) {
    let pwd = this.signUpForm.get('password')?.value;
    if (pwd === confirmPWDValue) {
      this.stepper.selected.hasError = false;
      this.SetNext();
      this.SetFinally();
    } else {
      this.pwdIsCheck = false;
      this.stepper.selected.hasError = true;
    }

    console.log(`password=${pwd},confirmPWD=${confirmPWDValue}`);
  }

  SetFinally() {
    this.stepper.steps.forEach((step: MatStep) => {
      step.editable = false;
    });
  }
}

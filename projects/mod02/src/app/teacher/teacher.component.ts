import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styles: [],
})
export class TeacherComponent {
  // constructor() {
  //   for (let i = 0; i <= 1000000; i++) {
  //     console.log('for......end');
  //   }
  // }
  passData: string;
  constructor(private router: Router) {
    for (let i = 0; i <= 100000; i++) {
      console.log('for......end');
    }
    this.passData = 'this time is good time';
  }

  passDataByParams() {
    let extras: NavigationExtras = {
      queryParams: { data: this.passData + '(NavigationExtras)' },
    };
    this.router.navigate(['/teacher', 'project'], extras); //navigate類似於vue router的push
  }
}

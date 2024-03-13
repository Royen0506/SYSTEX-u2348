import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styles: [
  ]
})
export class TeacherComponent implements OnInit {

  // constructor() { 
  //   for (let i=0; i<=1000000000; i++){
  //   }
  //   console.log("for ... end");
  // }
  passData: string;
  constructor(private router: Router) {
    this.passData = "This time is good time.";
  }
  passDataByParams() {
    let extras: NavigationExtras
      = { queryParams: { data: this.passData + ' (NavigationExtras)' } };
    this.router.navigate(['/teacher', 'project'], extras);
  }


  ngOnInit(): void {
  }

}

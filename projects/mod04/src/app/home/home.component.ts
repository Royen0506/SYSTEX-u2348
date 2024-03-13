import { Component } from '@angular/core';
import { deptSubject } from '../subject';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  deptSubject = deptSubject;

  public member = {
    userName: 'Mary',
    email: 'Mary@uuu.com.tw',
    gender: '2',
    birthday: new Date(2000, 0, 1, 0, 0, 0),
    subjectID: 'U2348',
  };

  gender = [
    { value: '1', display: '男' },
    { value: '2', display: '女' },
  ];
}

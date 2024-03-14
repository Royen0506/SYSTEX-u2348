import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styles: [],
})
export class UserNameComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}

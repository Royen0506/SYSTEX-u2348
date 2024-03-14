import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [],
})
export class LogoutComponent implements OnInit {
  constructor(private autService: AuthService, private router: Router) {
    this.autService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}

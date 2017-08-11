import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, private route: Router) {
    this.message = '';
    if(authService.getUser())
    {
      this.route.navigate(['/logged-in']);
      window.location.reload();
    }
  }

  login(username: string, password: string) {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    } else {
      this.route.navigate(['/logged-in']);
      window.location.reload();
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  dashboard() {
    this.route.navigate(['/logged-in']);
    window.location.reload();
    return false;
  }
}

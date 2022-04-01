import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/authservice';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  role = this.cookie.get('role')
  userName = this.cookie.get('username')
  constructor(public auth: AuthService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {

  }

  logOut() {
    this.auth.isAuthenticated = false;
    this.cookie.delete('username')
    this.cookie.delete('role')
    this.router.navigate(['/']);
    alert('Successfully logged out');
  }
}

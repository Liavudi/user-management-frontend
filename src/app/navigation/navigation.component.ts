import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/authservice';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {UsersService } from '../services/users.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  role = this.cookie.get('role')
  userName = this.cookie.get('username')
  

  constructor(public auth: AuthService, private usersService: UsersService ,private cookie: CookieService, private router: Router) {
  }
  ngOnInit(): void {
  }
 
  logOut() {
      this.usersService.logOut().subscribe(res => {
        if (res.status === 200) {
          this.auth.isAuthenticated = false;
          this.cookie.delete('username')
          this.cookie.delete('role')
          this.router.navigate(['/']);
          alert(res.body?.data)
        } else {
          alert(res.body?.error.message)
        }
      })
    }
  }

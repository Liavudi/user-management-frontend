import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoginForm } from './loginform';
import { AuthService } from './authservice';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export let loggedIn: string = ''

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, public auth: AuthService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {

  }

  onLogin(userName: string, password: string) {
    let userDetails = new LoginForm(userName, parseInt(password))
    this.usersService.loginUser(userDetails).subscribe(res => { console.log(res)
      if (res.status === 200) {
        this.cookie.set('username', `${res.body?.data.username}`,{secure: true});
        this.cookie.set('role', `${res.body?.data.role}`,{secure: true});
        this.auth.isAuthenticated = true
        loggedIn = userName
        this.router.navigate(['/']);
        alert('User logged in successfully!')
      } else { alert(res.body?.error.message) }
    })
  }
}


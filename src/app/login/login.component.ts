import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { LoginForm } from './loginform';
import { AuthService } from './authservice';
import {Router} from '@angular/router';
export let HEROES: string = ''
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private usersService: UsersService, public auth: AuthService, private router: Router,) { }

  ngOnInit(): void {
  }

  onLogin(userName: string, password: string) {
    let userDetails = new LoginForm(userName, parseInt(password))
    this.usersService.LoginUser(userDetails).subscribe(res => {
      console.log(res); if (res.status === 200) {
        this.auth.isAuthenticated = true
        HEROES = userName
        console.log(HEROES)
        alert('User logged in successfully!')
        this.router.navigate(['/']);
      } else { alert(res.body?.error.message) }
    })
  }
}


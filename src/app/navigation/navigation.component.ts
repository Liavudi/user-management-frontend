import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/authservice';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

logOut(){
  this.auth.isAuthenticated = false;
  this.router.navigate(['/'])
  alert('Successfully logged out')
}
}

import { Component} from '@angular/core';
import { Router, Event, NavigationStart} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoggedinService} from './services/loggedin.service' 
import { AuthService } from './login/authservice';
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'user-management-front';
  currentRoute: string;
  loggedIn = this.userId.getLogged()
    constructor(private router: Router, private auth: AuthService, private cookie: CookieService, private userId: LoggedinService, private userService: UsersService) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            if (this.cookie.check('username')) {
              this.auth.isAuthenticated = true
              this.loggedIn = this.cookie.get('username')
              // userService.checkLogged().subscribe(res => console.log(res))
              }
        }
    });
}
}
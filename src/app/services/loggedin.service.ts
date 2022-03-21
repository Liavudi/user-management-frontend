import { Injectable } from '@angular/core';
import { loggedIn } from  '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class LoggedinService {
  getLogged(){return loggedIn}
}

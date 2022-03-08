import { Injectable } from '@angular/core';
import { HEROES } from  '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class LoggedinService {
  getLogged(){return HEROES}
}

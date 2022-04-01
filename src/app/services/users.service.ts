import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserForm } from '../userform';
import { LoginForm } from '../login/loginform'
import { CookieService } from 'ngx-cookie-service';

type Error = {
  message: string;
}

export interface UserResponse {
  error: Error
  status: number
  data: string
}

export interface ListUsersResponse {
  users: UserForm[];
}
export interface Data {
  username: string
  role: string
}
export interface LoginResponse {
  error: Error
  status: number
  data: Data
}


@Injectable({
  providedIn: 'root'
})


export class UsersService {
  private userName = this.cookie.get('username')
  private serverAddress = 'http://localhost:5000';

  constructor(private http: HttpClient, private cookie: CookieService) { }


  public getUsers(): Observable<ListUsersResponse> {
    return this.http.get<ListUsersResponse>(`${this.serverAddress}/users/${this.userName}`);
  }
  public createUser(user: UserForm): Observable<HttpResponse<UserResponse>> {
    return this.http.post<UserResponse>(`${this.serverAddress}/users`, user, { observe: "response" });
  }

  public deleteUser(id: number, selectedUser: string): Observable<HttpResponse<UserResponse>> {
    return this.http.delete<UserResponse>(`${this.serverAddress}/users/${selectedUser}/${id}`, { observe: 'response' });
  }

  public updateUser(id: number, user: UserForm): Observable<HttpResponse<UserResponse>> {
    return this.http.put<UserResponse>(`${this.serverAddress}/users/${id}`, user, { observe: "response" });
  }

  public loginUser(userDetails: LoginForm): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.serverAddress}/login`, userDetails, { observe: "response", withCredentials: true })
  }
  public checkLogged(): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.serverAddress}/`, this.userName, { observe: 'response' })
  }

}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserForm } from '../userform';
import { LoginForm } from '../login/loginform'

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


@Injectable({
  providedIn: 'root'
})


export class UsersService {

  private serverAddress = 'http://localhost:5000';

  constructor(private http: HttpClient) { }


  public getUsers(): Observable<ListUsersResponse>{
    return this.http.get<ListUsersResponse>(`${this.serverAddress}/users`,);
  }
  public createUser(user: UserForm): Observable<HttpResponse<UserResponse>>{
    return this.http.post<UserResponse>(`${this.serverAddress}/users`, user, {observe: "response"});
  }

  public deleteUser(id: number): Observable<HttpResponse<UserResponse>> {
    return this.http.delete<UserResponse>(`${this.serverAddress}/users/${id}`, {observe: 'response'});
  }

  public updateUser(id: number, user: UserForm): Observable<HttpResponse<UserResponse>> {
    return this.http.put<UserResponse>(`${this.serverAddress}/users/${id}`, user, { observe: "response" });
  }

  public LoginUser(userDetails: LoginForm): Observable<HttpResponse<UserResponse>> {
    return this.http.post<UserResponse>(`${this.serverAddress}/login`, userDetails ,{observe: "response"})
  }

}


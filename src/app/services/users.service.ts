import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserForm } from '../userform';
import { LoginForm } from '../login/loginform'

type Error = {
  message: string;
}

export interface UpdateUserResponse {
  error: Error
  status: number
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


  public getUsers(): Observable<ListUsersResponse> {
    return this.http.get<ListUsersResponse>(`${this.serverAddress}/users`);
  }
  public createUser(user: UserForm) {
    return this.http.post(`${this.serverAddress}/users`, user);
  }

  public deleteUser(id: number) {

    return this.http.delete(`${this.serverAddress}/users/${id}`);
  }

  public updateUser(id: number, user: UserForm): Observable<HttpResponse<UpdateUserResponse>> {
    return this.http.put<UpdateUserResponse>(`${this.serverAddress}/users/${id}`, user, { observe: "response" });
  }

  public LoginUser(userDetails: LoginForm): Observable<HttpResponse<UpdateUserResponse>> {
    return this.http.post<UpdateUserResponse>(`${this.serverAddress}/login`, userDetails ,{observe: "response"})
  }

}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TodoForm } from '../todolist/todoform'

export interface TodoResponse {
  error: Error
  status: number;
  data: TodoForm[];
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private serverAddress = 'http://localhost:5000';
  constructor(private http: HttpClient,) { }

  public getTodoList(): Observable<HttpResponse<TodoResponse>> {
    return this.http.get<TodoResponse>(`${this.serverAddress}/todolist/`, { observe: 'response', withCredentials: true});
  }
  public createTodo(user: string, todo: string): Observable<HttpResponse<TodoResponse>> {
    let form = { user, todo }
    return this.http.post<TodoResponse>(`${this.serverAddress}/todolist`, form, { observe: "response" });
  }
  public deleteTodo(todoId: string): Observable<HttpResponse<TodoResponse>> {
    return this.http.delete<TodoResponse>(`${this.serverAddress}/todolist/${todoId}`, { observe: "response" });
  }
}

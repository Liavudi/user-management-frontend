import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {TodoForm } from '../todolist/todoform'
export interface TodoListResponse {
  todos: TodoForm[];
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private serverAddress = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  public getTodoList(): Observable<TodoListResponse>{
    return this.http.get<TodoListResponse>(`${this.serverAddress}/todolist`);
  }
  public createTodo(user: string, todo:string) {
    let form = {user, todo}
    return this.http.post(`${this.serverAddress}/todolist`, form);
  }
  public deleteTodo(user: string) {
    return this.http.delete(`${this.serverAddress}/todolist/${user}`);
  }
}

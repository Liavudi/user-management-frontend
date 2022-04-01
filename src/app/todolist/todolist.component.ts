import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoForm } from '../todolist/todoform'
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {
  todoList?: TodoForm[] = []
  loggedUser = this.userId.get('username')

  constructor(private todoService: TodoService, public userId: CookieService) { }

  ngOnInit(): void {
    this.getUpdatedTodoList();
  }

  getUpdatedTodoList() {
    this.todoService.getTodoList().subscribe(res => {
      this.todoList = res.body?.data;
    })
  }
  createTodo(todo: string) {
    this.todoService.createTodo(this.loggedUser, todo).subscribe(res => {
      if (res.status === 201) {
        this.getUpdatedTodoList();
        alert(res.body?.data);

      } else {
        alert(`Didn't work, Reason: ${res.body?.error.message}`)
      }
    })
  }
  deleteTodo(todoId: string) {
    this.todoService.deleteTodo(todoId).subscribe(res => {
      if (res.status === 200) {
        this.getUpdatedTodoList();
        alert(res.body?.data);

      } else {
        alert(`Didn't work, Reason: ${res.body?.error.message}`)
      }
    })
  }
}

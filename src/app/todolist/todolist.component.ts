import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoForm } from '../todolist/todoform'
import { LoggedinService } from '../services/loggedin.service'


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {
  todoList?: TodoForm[] = []
  loggedUser = this.userId.getLogged()
  constructor(private todoService: TodoService, public userId: LoggedinService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(res => { this.todoList = res.body?.data })
  }
  createTodo(todo: string) {
    this.todoService.createTodo(this.loggedUser, todo).subscribe(res => { if (res.status === 201) { alert(res.body?.data) } else { alert(`Didn't work, Reason: ${res.body?.error.message}`) } })
  }
  deleteTodo(todoId: string) {
    this.todoService.deleteTodo(todoId).subscribe(res => { if (res.status === 200) { alert(res.body?.data) } else { alert(`Didn't work, Reason: ${res.body?.error.message}`) } })
  }
}

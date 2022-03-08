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
  todos: TodoForm[] = []
  loggedUser = this.userName.getLogged()
  constructor(private todoService: TodoService, public userName: LoggedinService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(todolist => { this.todos = todolist.todos; console.log(this.todos), console.log(todolist) })
  }
  createTodo(todo: string) {

    this.todoService.createTodo(this.loggedUser, todo).subscribe(res => { console.log(res); if (res.status === 200) { alert('Todo created successfully') } else { alert(`Didn't work, Reason: ${res.body?.error.message}`) } })
  }
  deleteTodo() {
    this.todoService.deleteTodo(this.loggedUser).subscribe(res => { console.log(res); if (res.status === 200) { alert('Todo Deleted Refresh The Page!') } else { alert(`Didn't work, Reason: ${res.body?.error.message}`) } })
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginComponent } from './login/login.component';
import {  AuthGuard } from './login/authservice';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [{ path: 'userlist', component: UserlistComponent},
{ path: 'registration', component: RegistrationComponent},
{ path: 'login', component: LoginComponent},
{path: 'todolist', component: TodolistComponent, canActivate: [AuthGuard]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


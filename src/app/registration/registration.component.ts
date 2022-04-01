import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserForm } from '../userform';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  users: UserForm[] = []
  validation = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be minimum 3 letters' },
      { type: 'pattern', message: 'Name cannot contain numbers ' }],
    'age': [
      { type: 'required', message: 'Age is required' },
      { type: 'min', message: 'Age must be over 18' }],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Must be a valid email'}],
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Name must be minimum 3 letters' }],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be minimum 6 length' }]
  }

  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username:['',[Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
    age: ['', [Validators.required, Validators.min(18)]]
  })

  constructor(private usersService: UsersService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(userId: any, userAge: string, name: string, password: string, email: string, userName: string) {
    let userDetails = new UserForm(userId, userName, name, email, parseInt(password), parseInt(userAge),'');
    this.usersService.createUser(userDetails).subscribe(res => {
      if (res.status === 201) {
        alert(res.body?.data)
      } else {
        alert(`Error creating user. Reason: ${res.body?.error.message}`)
      }
    });

  }
}
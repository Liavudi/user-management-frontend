import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserForm } from '../userform';
import { UsersService } from '../services/users.service'

import { FormvalidationComponent, } from '../formvalidation/formvalidation.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  users: UserForm[] = []
  validation = { 'name': [{ type: 'required', message: 'Name is required' }, { type: 'minlength', message: 'Name must be minimum 3 letters' }, { type: 'pattern', message: 'Name cannot contain numbers ' }], 'age': [{ type: 'required', message: 'Age is required' }, { type: 'min', message: 'Age must be over 18' }] }
  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
    age: ['', [Validators.required, Validators.min(18)]]
  })

  constructor(private usersService: UsersService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(userId: any, userAge: string, name: string, password: string, email: string, userName: string) {
    let userDetails = new UserForm(userId, userName, name, email, parseInt(password), parseInt(userAge));
    this.usersService.createUser(userDetails).subscribe(res => { console.log(res); if (res.status === 200) { alert('User created successfully') } else { alert(`Error creating user. Reason: ${res.body?.error.message}`) } });

  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.scss']
})
export class FormvalidationComponent implements OnInit {
  validation = { 'name': [{ type: 'required', message: 'Name is required' }, { type: 'minlength', message: 'Name must be minimum 3 letters' }], 'age': [{ type: 'required', message: 'Age is required' }, { type: 'min', message: 'Age must be over 18' }] }
  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.min(18)]]
  })
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }



}
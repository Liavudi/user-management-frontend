import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

const MaterialComponent = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule
]
  
@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialsModule { }

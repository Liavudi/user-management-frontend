import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const MaterialComponent = [
  MatButtonModule,
  MatProgressSpinnerModule
]
  
@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialsModule { }

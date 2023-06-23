import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciasComponent } from '../distancias.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DistanciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    DistanciasComponent
  ]
})
export class DistModule { }

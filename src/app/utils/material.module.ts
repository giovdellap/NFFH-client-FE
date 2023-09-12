import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

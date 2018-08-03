import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { FormService } from './form.service';
// import { FormService } from './form.service';
// import { FormService } from './form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ReactiveFormComponent],
  exports: [
    ReactiveFormComponent
  ],
  providers: []
})
export class FormControlModule { }

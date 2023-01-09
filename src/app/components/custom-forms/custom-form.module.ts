import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [
    // CommonModule, //---imported from shared module
    CustomFormRoutingModule,
    SharedModule,
  ]
})
export class CustomFormModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormComponent } from '../components/address-form/address-form.component';
import { CommonModule } from '@angular/common';

const components = [
  AddressFormComponent
]

const modules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  CommonModule
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules
  ],
  exports: [
    modules,
    components
  ]
})
export class SharedModule { }

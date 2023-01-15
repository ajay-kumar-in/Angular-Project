import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormComponent } from '../components/address-form/address-form.component';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { SingleFileUploadComponent } from '../components/single-file-upload/single-file-upload.component';
import { FormArrayComponent } from '../components/form-array/form-array.component';

const components = [
  AddressFormComponent,
  FileUploadComponent,
  SingleFileUploadComponent,
  FormArrayComponent
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

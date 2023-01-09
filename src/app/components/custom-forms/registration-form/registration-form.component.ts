import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: any;
  genders: string[] = [];
  nameRegex = /^[a-zA-Z]+$/
  mobileRegex = /^(0|91)?[6-9][0-9]{9}$/;
  emailRegex = /^[a-zA-Z_]+[a-zA-Z0-9_.]*@[a-zA-Z]{3,}[.]([a-zA-Z]{2,5})+$/;
  accNoRegex = /^[0-9]{11,16}$/;
  IFSCRegex = /^[a-zA-Z]{4}[0][a-zA-Z0-9]{6}$/;

  constructor() { }

  ngOnInit(): void {
    this.genders = ['Male', 'Female', 'Other'];

    this.registrationForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.nameRegex)]),
      lastName: new UntypedFormControl('', [Validators.required,  Validators.pattern(this.nameRegex)]),
      gender: new UntypedFormControl('', [Validators.required]),
      mobile: new UntypedFormControl('', [Validators.pattern(this.mobileRegex)]),
      email: new UntypedFormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      accountNumber: new UntypedFormControl('', [Validators.required, Validators.pattern(this.accNoRegex)]),
      ifscCode: new UntypedFormControl('', [Validators.required, Validators.pattern(this.IFSCRegex)]),
      notes: new UntypedFormControl(''),
      address: new UntypedFormControl('', [Validators.required]) 
    })
    
    if(localStorage.getItem('regForm')) {
      this.registrationForm.setValue(JSON.parse(localStorage.getItem('regForm') || ''))
    }
  }

  onSubmit() {
    if(this.registrationForm.invalid) {
      for (let key in this.registrationForm.value) {
        if(this.registrationForm.get(key).invalid) {
          this.registrationForm.get(key).markAsDirty();
        }
      }
      return;
    }
    console.log('Registration Form', this.registrationForm.value);
    localStorage.setItem('regForm', JSON.stringify(this.registrationForm.value))
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.nameRegex)]),
      lastName: new FormControl('', [Validators.required,  Validators.pattern(this.nameRegex)]),
      gender: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.pattern(this.mobileRegex)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      accountNumber: new FormControl('', [Validators.required, Validators.pattern(this.accNoRegex)]),
      ifscCode: new FormControl('', [Validators.required, Validators.pattern(this.IFSCRegex)]),
      notes: new FormControl('')    
    })
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
  }

}

import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AddressFormComponent) 
    },
  ]
})
export class AddressFormComponent implements ControlValueAccessor, OnDestroy {

  onTouched = () => {};
  onChangeSub: any;
  @Input() legend: string = '';

  addressForm: any = this.fb.group({
    addressLine1: ['', [Validators.required]],
    addressLine2: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pinCode: ['', [Validators.required]],
    country: ['', [Validators.required]]
  });


  constructor(private fb: UntypedFormBuilder) { }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.addressForm.valueChanges.subscribe(onChange);
  }

  ngOnDestroy() {
    this.onChangeSub.unsubscribe();
  }

  writeValue(formObj: any): void {
    if (formObj) {
      this.addressForm.setValue(formObj)
    }
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.addressForm.disable();
    }
    else {
      this.addressForm.enable();
    }
  }

}

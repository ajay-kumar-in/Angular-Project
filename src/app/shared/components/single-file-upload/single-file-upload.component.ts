import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  styleUrls: ['./single-file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SingleFileUploadComponent
    },
  ]
})
// accept file sent formate = .fielExt1/.fileExt2/.fileExt3  eg= .jpg/.jpeg/.png
// <app-single-file-upload formControlName="singleFile" acceptFileType=".jpg/.jpeg/.png"></app-single-file-upload>

export class SingleFileUploadComponent implements OnInit, ControlValueAccessor, OnDestroy {

  @Input() acceptFileType: string = '';
  singleFileUploadForm: any;
  fileName: string = '';
  imagePreview: string = '';
  onTouched: any = ()=> {};
  onChange: any = ()=> {};
  onChangeSub: any;
  acceptType:any;

  constructor(
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.acceptType = this.acceptFileType.split('/')
    this.singleFileUploadForm = this.fb.group({
      uploadedFileName: ['', [Validators.required]]
    })
  }

  onFileSelected(event: any) {
    this.onTouched();
    const file: File = event.target.files[0];
    
    if (file) {
      this.fileName = file.name;
      this.singleFileUploadForm.get('uploadedFileName')?.setValue(file)
      this.singleFileUploadForm.get('uploadedFileName')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        localStorage.setItem('imgPr', this.imagePreview)
      };
      reader.readAsDataURL(file);
    }
  }

  writeValue(formObj: any): void {
    if(formObj) {
      this.singleFileUploadForm.setValue(formObj);
      this.fillImage()
    }
  }

  fillImage() {
    //----------- for img preview assign img url to this.imagePreview------
    let localFile = (localStorage.getItem('imgPr') || '')
    this.imagePreview  = localFile;
    this.singleFileUploadForm.get('uploadedFileName')?.setValue(localFile)
    this.singleFileUploadForm.get('uploadedFileName')?.updateValueAndValidity();
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.singleFileUploadForm.valueChanges.subscribe(onChange);
  }

  ngOnDestroy() {
    this.onChangeSub.unsubscribe();
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled) {
      this.singleFileUploadForm.disable();
    } else {
      this.singleFileUploadForm.enable()
    }
  }
}

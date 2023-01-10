import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent
    },
  ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  fileName: string = '';
  imagePreview: string = '';
  onChange: any = () => { };
  onTouched: any = () => { };
  disabled: boolean = false;
  fileForm: any;

  constructor(
    private http: HttpClient,
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void { 
    this.fileForm = this.fb.group({
      fileControl: ['', [Validators.required]],
      name: ['', [Validators.required]]
    })
  }

  onFileSelected(event: any) {
    this.onTouched();
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);

      // const formData = new FormData();

      // formData.append("name", 'name');
      // formData.append("description", 'description');
      // formData.append("originalPrice", '1000');
      // formData.append("discount", '5');
      // formData.append("category", 'category');
      // formData.append("imagePath", file);
      // formData.append("status", 'true');

      // this.http.post('http://localhost:3000/api/product', formData).subscribe(res => {
      //     console.log('22222222222222222222222', res);
      // });

    }
  }


  writeValue(value: any) {
    this.fileName = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  form: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      skills: this.fb.array([
        this.fb.group({
          skill: ['', [Validators.required]],
          experience: ['', [Validators.required]]
        })
      ])
    })
  }

  get skills() {
    return this.form.controls['skills'] as FormArray;
  }

  getFormGroupAt(i: number) {
    return this.form.controls['skills'].at(i).controls as FormGroup;
  }

  addSkill() {
    const skillForm = this.fb.group({
      skill: ['', [Validators.required]],
      experience: ['', [Validators.required]]
    })
    this.skills.push(skillForm)
  }

  deleteSkill(index: number) {
    if(this.skills.length <= 1) {
      return;
    }
    this.skills.removeAt(index)
  }

  submitForm() {
    console.log(this.form.value);
  }

}

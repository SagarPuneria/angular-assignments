import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EqualMatchValidate } from 'src/app/shared/equal-match.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public userForm: FormGroup;
  public isUserFormSubmitted: boolean;
  constructor(public formBuilder: FormBuilder) {
    this.userForm = {} as FormGroup;
    this.isUserFormSubmitted = false;
  }
  public ngOnInit(): void {
    // this.initializeUserFormWithoutFormBuilder();
    this.initializeUserFormWithFormBuilder();
    // this.userForm.markAllAsTouched();
  }
  public initializeUserFormWithoutFormBuilder() {
    this.userForm = new FormGroup({
      name: new FormControl(['']),
      email: new FormControl(['']),
      address: new FormControl(['']),
      city: new FormControl(['']),
      phone: new FormControl(['']),
      password: new FormControl(['']),
      confirmPassword: new FormControl(['']),
      disclaimer: new FormControl([false]),
    });
  }

  public initializeUserFormWithFormBuilder() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      disclaimer: false
    }, {
      validator: EqualMatchValidate('password', 'confirmPassword')
    });
  }

  get userFormControls() {
    return this.userForm.controls;
  }
  public onSubmit() {
    this.isUserFormSubmitted = true;
    if (this.userForm.status === 'VALID') {
      console.log('this.userForm.getRawValue:', this.userForm.getRawValue());
    }
    console.log('this.userForm.value:', this.userForm.value);
  }
}

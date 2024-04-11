import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  public userForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.userForm = {} as FormGroup;
  }
  public ngOnInit(): void {
    this.initializeUserFormWithoutFormBuilder();
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
  get userFormControls() {
    return this.userForm.controls;
  }
}

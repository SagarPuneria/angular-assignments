import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserFormData } from 'src/app/models/user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  @ViewChild('userFormDetails') form: NgForm;
  public userForm: IUserFormData;
  constructor() {
    this.userForm = {} as IUserFormData;
    this.form = {} as NgForm;
  }

  ngOnInit(): void {
    setTimeout(() => {
      for (const key in this.form.controls) {
        console.log(this.form.controls);
        this.form.controls[key].markAllAsTouched();
      }
    });
  }

}

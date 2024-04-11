import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public emp: Employee;
  public showEdit: boolean;
  constructor() {
    this.emp = {} as Employee;
    this.showEdit = true;
  }

  ngOnInit(): void {
    this.emp = {
      employeeID: '2',
      firstName: 'John',
      lastName: 'Smith',
      salary: 10000,
      DOB: new Date(),
      email:'john@abc.com',
      action:''
    };
  }
  public EditEmp() {
    this.showEdit = false;
  }
  public UpdateEmp() {
    this.showEdit = true;
  }

}

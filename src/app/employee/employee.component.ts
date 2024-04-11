import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public emplist: Employee[];
  constructor() {
    this.emplist = [];
  }

  ngOnInit(): void {
    this.emplist = [
      {
        employeeID: '2',
        firstName: 'John',
        lastName: 'Smith',
        salary: 10000,
        DOB: new Date('1983-11-02T00:00:00'),
        email: 'john@abc.com',
      },
      {
        employeeID: '3',
        firstName: 'Jason',
        lastName: 'Smith',
        salary: 12000,
        DOB: new Date('1980-08-12T00:00:00'),
        email: 'jason@abc.com',
      },
      {
        employeeID: '4',
        firstName: 'Amber',
        lastName: 'Dorothy',
        salary: 10000,
        DOB: new Date('1985-04-05T00:00:00'),
        email: 'amber@abc.com',
      },
      {
        employeeID: '5',
        firstName: 'Mark',
        lastName: 'Frank',
        salary: 15000,
        DOB: new Date('1982-06-10T00:00:00'),
        email: 'mark@abc.com',
      }
    ];
  }
}

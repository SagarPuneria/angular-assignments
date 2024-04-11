import { Component, OnInit } from '@angular/core';
import { EmplyoeeService } from '../services/emplyoee.service';
import { IEmployee2Response } from './employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  public employeesResponse: IEmployee2Response;
  constructor(public emp: EmplyoeeService) {
    this.employeesResponse = {} as IEmployee2Response;
  }

  ngOnInit(): void {
    this.emp.getNewsBycountry().subscribe(
      (data: IEmployee2Response) => { this.employeesResponse = data }
    );
  }
}

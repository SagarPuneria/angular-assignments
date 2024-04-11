import { Component, OnInit } from '@angular/core';
import { EmplyoeeService } from '../services/emplyoee.service';
import { Employee2 } from './employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  public employee2: Employee2;
  constructor(public emp: EmplyoeeService) {
    this.employee2 = {} as Employee2;
  }

  ngOnInit(): void {
  }

}

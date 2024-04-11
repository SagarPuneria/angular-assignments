import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee2Response } from '../newemployee/employee2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplyoeeService {

  constructor(public http: HttpClient) { }

  public getNewsBycountry(): Observable<IEmployee2Response> {
    return this.http.get<IEmployee2Response>(`https://dummy.restapiexample.com/api/v1/employees`);
  }
}

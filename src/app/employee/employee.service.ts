import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Employee} from './employee';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {
  }

  private _employeeUrl = 'http://localhost:8080/employee';

  getAllEmployees() {
    return this.http.get(this._employeeUrl)
      .map(data => <Employee[]> data.json())
      .catch(this.hendleError);
  }

  addEmployee(employee: Employee) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._employeeUrl, employee, headers).catch(this.hendleError);
  }

  private hendleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error() || 'server error');
  }
}

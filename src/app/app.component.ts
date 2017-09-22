import {Component, NgModule} from '@angular/core';
import {HelloService} from './hello.service';
import {Employee} from '../employee/employee';
import {EmployeeService} from '../employee/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HelloService, EmployeeService]
})

export class AppComponent {
  title = 'WildFly Swarm & Angular app';
  message: string;
  errorMessage: string;
  employees: Employee[];

  constructor(private _helloService: HelloService, private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    //this.getHelloMessage();
    this.getAllEmployees();
  }

  getHelloMessage() {
    this._helloService.getHelloMessage()
      .subscribe(
        data => this.message = data,
        err => this.errorMessage = <any> err
      );
  }

  getAllEmployees() {
    this._employeeService.getAllEmployees()
      .subscribe(
        data => this.employees = data,
        err => this.errorMessage = <any> err
      );
  }

}

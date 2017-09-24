import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {HelloService} from '../hello.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [HelloService, EmployeeService]
})


export class EmployeeComponent implements OnInit {
  message: string;
  errorMessage: string;
  employees: Employee[];

  constructor(private _helloService: HelloService, private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    // this.getHelloMessage();
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

  addEmployee(name: string) {
    const newEmployee = new Employee(name);
    this._employeeService.addEmployee(newEmployee)
      .subscribe(
        () => {
        },
        err => this.errorMessage = err
      );
  }
}

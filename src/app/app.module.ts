import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthService} from './login/auth.service';
import {ToastrService} from './service/toastr.service';
import {appRoutes} from './routes';
import {HelloService} from './hello.service';
import {EmployeeService} from './employee/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HelloService, EmployeeService, AuthService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

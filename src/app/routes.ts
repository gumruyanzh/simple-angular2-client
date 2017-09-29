import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';

export const appRoutes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent},
  {
    path: 'users/login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {path: '**', component: AppComponent}
];

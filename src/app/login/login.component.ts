import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from './user';
import {ToastrService} from '../service/toastr.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'WildFly Swarm & Angular app';

  messageClass;
  message;
  processing = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  // Functiont to submit form and login user
  onLoginSubmit() {
    // this.toastr.warning('Hello World!!!', 'first');
    this.processing = true;
    this.disableForm();
    // Create user object from user's input
    const user = new User(this.form.get('username').value, this.form.get('password').value);

    // Function to send login data to API
    this.authService.login(user).subscribe(data => {
      // Check if response was a success or error
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
      console.log(data);
      if (!data.ok) {
        this.messageClass = 'alert alert-danger';
        this.message = data.statusText;
        this.processing = false;
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.statusText;
        // Function to store user's token in client local storage
        this.authService.storeUserData(data.headers.get('Authorization'));
        // After 2 seconds, redirect to dashboard page
        setTimeout(() => {
          this.router.navigate(['/employee']);
        }, 2000);
      }
    });
  }
}

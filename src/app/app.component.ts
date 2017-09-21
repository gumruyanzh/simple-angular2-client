import {Component, NgModule} from '@angular/core';
import {HelloService} from "./hello.service";
import {Hello} from "./hello";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HelloService]
})

export class AppComponent {
  title = 'Kirovakan';
  message: string;
  errorMessage: string;

  constructor(private _helloService: HelloService) {
  }

  ngOnInit(){
    this.getHelloMessage();
  }

  getHelloMessage() {
    this._helloService.getHelloMessage()
      .subscribe(
        data => this.message = data,
        err => this.errorMessage = <any> err
      );
  }

}

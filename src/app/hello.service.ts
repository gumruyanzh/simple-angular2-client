import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Hello} from './hello';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class HelloService {
  constructor(private http: Http) {
  }

  private _helloUrl = 'http://localhost:8080/hello';

  getHelloMessage() {
    return this.http.get(this._helloUrl).catch(this.hendleError);
  }

  private hendleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error() || 'server error');
  }
}

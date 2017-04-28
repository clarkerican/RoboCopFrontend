/**
 * Created by Erica on 4/24/2017.
 */
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http"
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';


@Injectable()
export class DataService {

  private url = 'localhost:3000/data';

  constructor(private http: Http) {
  }

  getData(): Observable<Response> {
    return this.http.get(this.url);
  }

}



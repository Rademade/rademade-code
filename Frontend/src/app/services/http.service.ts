import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';


@Injectable()
export class HttpService {
  protected modelUrl: string;
  protected url: string = `/api/v1/`;

  constructor(private http: Http) {}

  index(): Observable<any> {
    let url = this.url + this.modelUrl;
    return this.http.get(url).map(res => res.json())
  }

  // show(): Observable<any> {
  //   return
  // }
  //
  // update(): Observable<any> {
  //   return
  // }
  //
  // create(): Observable<any> {
  //   return
  // }
  //
  // destroy(): Observable<any> {
  //   return
  // }

}
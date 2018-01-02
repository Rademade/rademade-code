import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import {  Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SignService {
  private urlForm: string;

  constructor(private http: AuthHttp) {
    this.urlForm = '/authenticate';
  }

  signIn(body: Object = undefined): Observable<any> {
    return this.http.post(this.urlForm, body)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}

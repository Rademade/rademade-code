import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import {  Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class SignService {
  private urlForm: string;

  constructor(private http: AuthHttp, private authService: AuthService) {
    this.urlForm = '/authenticate';
  }

  // createUser(body): Observable<any> {
  //   let bodyReq = {
  //     oms_user: {
  //       account_type: body['account_type'],
  //       email: body['email'],
  //       password: body['passwords']['password'],
  //       password_confirmation: body['passwords']['password_confirmation'],
  //       fullname: body['fullname']
  //     }
  //   };
  //
  //   return this.http.post(this.urlForm, bodyReq)
  //       .map((res: Response) => res.json())
  //       .catch((error: any) => Observable.throw(error || 'Server error'));
  // }
  //
  // checkToken(token: string): Observable<any> {
  //   return this.http.get(this.urlForm)
  //       .map((res: Response) => res.json())
  //       .catch((error: any) => Observable.throw(error || 'Server error'));
  // }
  //
  // requestNewPassword(body): Observable<any> {
  //   let bodyReq = { oms_user: body };
  //   return this.http.post(`${this.urlForm}/password`, bodyReq)
  //       .map((res: Response) => res.json())
  //       .catch((error: any) => Observable.throw(error || 'Server error'));
  // }
  //
  // checkResetPassToken(token: string): Observable<any> {
  //   return this.http.get(`${this.urlForm}/password/${token}`)
  //       .map((res: Response) => res.json())
  //       .catch((error: any) => Observable.throw(error || 'Server error'));
  // }
  //
  // doUpdatePassword(body): Observable<any> {
  //   let bodyReq = {
  //     oms_user: {
  //       current_password: body['passwords']['current_password'],
  //       password: body['passwords']['password'],
  //       password_confirmation: body['passwords']['password_confirmation'],
  //       token: body['reset_password_token']
  //     }
  //   };
  //
  //   return this.http.patch(`${this.urlForm}/password`, bodyReq)
  //       .map((res: Response) => res.json())
  //       .catch((error: any) => Observable.throw(error || 'Server error'));
  // }
  //
  // changeEmail(body): Observable<any> {
  //   let bodyReq = {
  //     oms_user: {
  //       current_password: body['passwords']['current_password'],
  //       email: body['passwords']['email']
  //     }
  //   };
  //
  //   return this.http.patch(`${this.urlForm}/change_email`, bodyReq)
  //       .map((res: Response) => res.json())
  //       .catch((error: any) => Observable.throw(error || 'Server error'));
  // }

  getUserInfo(currentUser) {
    return this.http.get(currentUser).map(
      (response: Response) => {
        console.log(response.json());
      }
    );
  }
  signIn(body: Object = undefined): Observable<any> {
    return this.http.post(this.urlForm, body)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  // signOut(): Observable<any> {
  //   this.cls.removeItem('userInfo');
  //   this.cls.removeItem('userToken');
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(true);
  //     }, 50);
  //   });
  // }
  //

  // getPreviousUrl() {
  //   return this.cls.getItem('previousUrl') || '/';
  // }
}

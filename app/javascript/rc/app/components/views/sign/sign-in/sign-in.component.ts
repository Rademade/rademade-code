import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, SignService } from 'services/index';

@Component({
  selector: 'rc-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.styles/_import.css']
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private signService: SignService,
    private http: Http,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(email: string, password: string) {
    this.signService.signIn({email: email, password: password}).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res['auth_token']);
        localStorage.setItem('userInfo', JSON.stringify({email: res['user']}));
        this.router.navigate(['/admin/users']);
      },
      (e) => {
        console.log(e)
      }
    );
  }
}

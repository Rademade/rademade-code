import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, SignService } from 'services';

@Component({
  selector: 'rc-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.styles/_import.css']
})

export class SignComponent implements OnInit {
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

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignApiService } from '@shared/services/api/sign.api.service';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'rc-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.styles/_import.css'],
})

export class SignComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private signApiService: SignApiService,
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

  onSubmit() {
    console.log('Email:', this.form.value);
    this.signApiService.signIn(this.form.value).subscribe(
      (res) => {
        console.log('Response' + res);
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

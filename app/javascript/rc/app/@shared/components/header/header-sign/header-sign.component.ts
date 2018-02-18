import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignApiService } from '@shared/services/api/sign.api.service';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'rc-header-sign',
  templateUrl: './header-sign.component.html',
  styleUrls: ['./header-sign.component.css']
})

export class HeaderSignComponent implements OnInit {
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
  }

  onSubmit() {
    this.signApiService.signIn(this.form.value).subscribe(
      (res) => {
        localStorage.setItem('token', res['auth_token']);
        localStorage.setItem('userInfo', JSON.stringify({email: res['user']}));
      },
      (e) => {
        console.log(e)
      }
    );
  }
}

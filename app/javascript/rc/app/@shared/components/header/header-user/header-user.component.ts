import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@shared/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  ngOnInit() {}

  logoutHeader() {
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
}

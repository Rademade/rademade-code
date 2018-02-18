import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@shared/services/current-user.service';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'rc-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  private headerNavItemList: Array<Object>;
  constructor(
    private authService: AuthService,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit() {
    this.headerNavItemList = [
      {
        link: ['/'],
        text: 'Home',
        state: true
      },
      {
        link: ['/checklists'],
        text: 'Checklists',
        state: true
      },
      {
        link: ['/snippets'],
        text: 'Snippets',
        state: true
      },
      {
        link: ['/users'],
        text: 'Users',
        state: this.getSuperAdminStatus()
      }
    ]
  }

  getSuperAdminStatus() {
    if (this.authService.isLoggedIn()) {
      return this.currentUserService.getUser().is_admin;
    }
    else {
      return false;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  private headerNavItemList: Array<Object>;
  constructor() { }

  ngOnInit() {
    this.headerNavItemList = [
      {
        link: ['/'],
        text: 'Home'
      },
      {
        link: ['/checklists'],
        text: 'Checklists'
      },
      {
        link: ['/snippets'],
        text: 'Snippets'
      },
      {
        link: ['/users'],
        text: 'Users'
      }
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  logoutHeader() {
    localStorage.removeItem('token');
  }
}

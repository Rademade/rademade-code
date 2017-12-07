import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rc-admin-snippets-list',
  templateUrl: './admin-snippets-list.component.html'
})
export class AdminSnippetsListComponent implements OnInit {

  private snippets: Array<Object>;

  constructor( public activeRoute: ActivatedRoute) {}

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Snippet } from '@models';

@Component({
  selector: 'rc-admin-snippets-list',
  templateUrl: './admin-snippets-list.component.html'
})
export class AdminSnippetsListComponent implements OnInit {

  private snippets: Array<Snippet>;

  constructor( public activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(({snippets}) => {
      this.snippets = snippets;
    });
  }

}

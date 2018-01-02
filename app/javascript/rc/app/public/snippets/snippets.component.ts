import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Snippet } from 'models';

@Component({
  selector: 'rc-snippets',
  templateUrl: './snippets.component.html'
})
export class SnippetsComponent implements OnInit {
  private snippets: Snippet[];

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.snippets = this.activeRoute.snapshot.data['snippets'];
  }

}
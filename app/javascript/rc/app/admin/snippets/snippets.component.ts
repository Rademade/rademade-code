import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {CurrentUserService, SnippetsService} from 'services';
import {Snippet} from 'models';

@Component({
  selector: 'rc-snippets',
  templateUrl: './snippets.component.html'
})
export class SnippetsComponent implements OnInit {
  private snippets: Snippet[];

  private form: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private fb: FormBuilder,
              private snippetsService: SnippetsService,
              private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    this.snippets = this.activeRoute.snapshot.data['snippets'];

    this.form = this.fb.group({
      title: '',
      description: '',
      user_id: this.currentUserService.getUser().user_id,
      sref: '',
    });
  }

  public onSubmit() {
    this.snippetsService.create(this.form.value)
      .subscribe((snippet) => {
        this.snippets.push(snippet);
      });
  }
}
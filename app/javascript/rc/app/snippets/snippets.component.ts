import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnippetModel } from '@shared/models/snippet.model';
import { SnippetsApiService } from '@shared/services/api/snippets.api.service';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'rc-snippets',
  templateUrl: './snippets.component.html'
})
export class SnippetsComponent implements OnInit {
  private snippets: SnippetModel[];
  private createSnippetForm: FormGroup;
  private updateSnippetForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private fb: FormBuilder,
              private snippetsApiService: SnippetsApiService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.snippets = this.activeRoute.snapshot.data['snippets'];

    this.createSnippetForm = this.fb.group({
      title: '',
      description: '',
      sref: '',
    });

    this.updateSnippetForm = this.fb.group({
      title: '',
      description: '',
      sref: '',
    });
  }

  onSubmit() {
    this.snippetsApiService.create(this.createSnippetForm.value)
      .subscribe((snippet) => {
        this.snippets.push(snippet);
      });
  }

  updateSnippet(id: number) {
    this.snippetsApiService.update(this.updateSnippetForm.value, id)
      .subscribe((error) => console.log(error));
  }

  destroySnippet(id: number) {
    this.snippetsApiService.destroy(id)
      .subscribe((snippet) => snippet.slice(-1, id));
  }

}
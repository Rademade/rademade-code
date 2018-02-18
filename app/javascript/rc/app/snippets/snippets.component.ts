import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnippetModel } from '@shared/models/snippet.model';
import { AuthService } from '@shared/services/auth.service';
import { SnippetsApiService } from '@shared/services/api/snippets.api.service';

@Component({
  selector: 'rc-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  
  private snippets: SnippetModel[];
  private snippetsForm: FormGroup;
  private currentIndex: number;
  private currentId: number;
  private editMode: boolean = false;
  private toggleFormState: boolean = false;

  constructor(
    public snippetsService: SnippetsApiService,
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getSnippets();

    this.snippetsForm = this.formBuilder.group({
      title: '',
      description: '',
      sref: ''
    });

  };

  getSnippets() {
    this.snippetsService.index().subscribe((snippets) => {
      this.snippets = snippets;
    });
  }

  updateSnippet() {
    this.snippetsService.update(this.snippetsForm.value, this.currentId).subscribe(
      () => {
        this.getSnippets();
        this.editMode = false;
      }
    );
    this.snippetsForm.reset();
    this.toggleForm();
  }

  editSnippet(id: number, index: number) {
    this.currentIndex = index;
    this.currentId = id;
    this.editMode = true;
    this.toggleForm();
    this.snippetsForm.patchValue(this.snippets[this.currentIndex]);
  }

  addSnippet() {
    this.snippetsService.create(this.snippetsForm.value).subscribe((snippet) => {
      this.snippets.push(snippet);
    });
    this.snippetsForm.reset();
    this.toggleForm();
  }

  destroySnippet(id: string, index: number) {
    if (confirm("Press a button!") == true) {
      this.snippetsService.destroy(id).subscribe(()=> {this.getSnippets()});
    } else {
      return false;
    }
  }

  toggleForm() {
    this.toggleFormState = !this.toggleFormState;
  }

  cancelForm() {
    this.editMode = false;
  }

}
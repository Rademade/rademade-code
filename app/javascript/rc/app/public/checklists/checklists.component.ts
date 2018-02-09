import { Component, OnInit } from '@angular/core';
import { ChecklistModel } from 'models';
import { ActivatedRoute } from '@angular/router';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'rc-checklists',
  templateUrl: './checklists.component.html'
})
export class ChecklistsComponent implements OnInit {
  private checklists: ChecklistModel[];
  private createChecklistForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private checklistsApiService: ChecklistsApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.checklistsApiService.index()
      .subscribe((checklists) => {
        this.checklists = checklists;
      });

    this.createChecklistForm = this.formBuilder.group({
      title: '',
    });

  }

  onSubmit() {
    this.checklistsApiService.create(this.createChecklistForm.value)
      .subscribe((snippet) => {
        this.checklists.push(snippet);
      });
  }

  onCreateChecklistItemForm(title: string, checklistId: number) {
    this.checklistsApiService.createItem( checklistId,{title: title, checklist_id: checklistId})
      .subscribe(
        checklistItems =>
          this.checklists[checklistId - 1].checklist_items.push(checklistItems)
      );
  }

  updateSnippet(id: number) {
    this.checklistsApiService.update(this.createChecklistForm.value, id)
      .subscribe((error) => console.log(error));
  }

  destroySnippet(id: number) {
    this.checklistsApiService.destroy(id)
      .subscribe((snippet) => snippet.slice(-1, id));
  }
}
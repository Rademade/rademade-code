import { Component, OnInit } from '@angular/core';
import { ChecklistModel } from 'models';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'rc-checklists',
  templateUrl: './checklists.component.html'
})
export class ChecklistsComponent implements OnInit {
  private checklists: ChecklistModel[];
  private checklistsForm: FormGroup;

  private currentIndex: number;
  private currentId: number;
  private editMode: boolean = false;

  constructor(
    private checklistsApiService: ChecklistsApiService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getChecklists();
    this.checklistsForm = this.formBuilder.group({
      title: '',
    });

  }

  getChecklists() {
    this.checklistsApiService.index()
      .subscribe((checklists) => {
        this.checklists = checklists;
      });
  }

  updateChecklist() {
    this.checklistsApiService.update(this.checklistsForm.value, this.currentId).subscribe(
      () => {
        this.getChecklists();
        this.editMode = false;
      }
    );
    this.checklistsForm.reset();
  }

  editChecklist(id: number, index: number) {
    this.currentIndex = index;
    this.currentId = id;
    this.editMode = true;
    this.checklistsForm.patchValue(this.checklists[this.currentIndex]);
  }

  addChecklist() {
    this.checklistsApiService.create(this.checklistsForm.value).subscribe((link) => {
      this.checklists.push(link);
    });
    this.checklistsForm.reset();
  }

  destroyChecklist(id: string, index: number) {
    if (confirm("Press a button!") == true) {
      this.checklists.splice(index, 1);
      this.checklistsApiService.destroy(id).subscribe();
    } else {
      return false;
    }
  }

  addChecklistItem(title: string, checklistId: number) {
    this.checklistsApiService.createItem( checklistId,{title: title, checklist_id: checklistId})
      .subscribe(() => this.getChecklists());
  }

  destroyChecklistItem(checklistId, id: string) {
    if (confirm("Press a button!") == true) {
      this.checklistsApiService.destroyItem(checklistId, id).subscribe(() =>
        this.getChecklists()
      );
    } else {
      return false;
    }
  }
}
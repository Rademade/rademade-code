import { Component, OnInit } from '@angular/core';
import { ChecklistItemModel, ChecklistModel } from 'models';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getChecklists();
    this.checklistsForm = this.formBuilder.group({
      title: '',
      checklist_items: this.formBuilder.array( [
        this.formBuilder.group({title: ''})
      ])
    });
  }

  getChecklists() {
    this.checklistsApiService.index()
      .subscribe((checklists) => {
        this.checklists = checklists;
      });
  }

  get checklist_items(): FormArray {
    return this.checklistsForm.get('checklist_items') as FormArray;
  };

  ngOnChanges() {
    this.checklistsForm.setControl('checklist_items', this.formBuilder.array([
      this.formBuilder.group(new ChecklistItemModel())
    ]));
    this.checklistsForm.reset();
  }

  removeChecklistItemControl(index) {
    this.checklist_items.removeAt(index);
  }

  addChecklistControl() {
    this.checklist_items.push(this.formBuilder.group(new ChecklistItemModel()));
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
    console.log(this.checklists[this.currentIndex]);
    this.checklistsForm.setControl('checklist_items', this.formBuilder.array(
      this.checklists[this.currentIndex].checklist_items.map(() => {
        return this.formBuilder.group(new ChecklistItemModel());
      })
    ));
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

}
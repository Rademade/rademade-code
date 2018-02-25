import { Component, OnChanges, OnInit } from '@angular/core';
import { ChecklistItemModel, ChecklistModel } from 'models';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rc-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.css']
})
export class ChecklistsComponent implements OnInit, OnChanges {
  private checklists: ChecklistModel[];
  public checklistsForm: FormGroup;

  private currentIndex: number;
  private currentId: number;
  private editMode: boolean = false;
  private toggleFormState: boolean = false;

  constructor(
    private checklistsApiService: ChecklistsApiService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
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
    this.checklists = this.activeRoute.snapshot.data['checklists'];
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
    this.toggleForm();
    this.checklistsApiService.update(this.checklistsForm.value, this.currentId).subscribe(
      () => {
        this.getChecklists();
        this.editMode = false;
      }
    );
    this.ngOnChanges();
  }

  editChecklist(id: number, index: number) {
    this.toggleForm();
    this.currentIndex = index;
    this.currentId = id;
    this.editMode = true;
    this.checklistsForm.setControl('checklist_items', this.formBuilder.array(
      this.checklists[this.currentIndex].checklist_items.map(() => {
        return this.formBuilder.group(new ChecklistItemModel());
      })
    ));
    this.checklistsForm.patchValue(this.checklists[this.currentIndex]);
  }

  addChecklist() {
    this.toggleForm();
    this.checklistsApiService.create(this.checklistsForm.value).subscribe((link) => {
      this.checklists.push(link);
    });
    this.ngOnChanges();
  }

  destroyChecklist(id: string, index: number) {
    if (confirm("Press a button!") == true) {
      this.checklists.splice(index, 1);
      this.checklistsApiService.destroy(id).subscribe();
    } else {
      return false;
    }
  }

  toggleForm() {
    this.toggleFormState = !this.toggleFormState;
  }

  cancelForm() {
    this.ngOnChanges();
    this.editMode = false;
  }

}
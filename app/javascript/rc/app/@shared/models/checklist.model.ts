import { ChecklistItemModel } from 'models';

export class ChecklistModel {
  title: string;
  checklist_items: ChecklistItemModel[] = [];

  constructor(json) {
    Object.assign(this, json)
  }
}
import { ChecklistItemModel } from 'models';

export class ChecklistModel {
  title: string;
  active: boolean;
  checklist_items: ChecklistItemModel[];

  constructor(json) {
    Object.assign(this, json)
  }
}
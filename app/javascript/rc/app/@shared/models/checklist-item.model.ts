export class ChecklistItemModel {
  title: string;

  constructor(json) {
    Object.assign(this, json)
  }
}
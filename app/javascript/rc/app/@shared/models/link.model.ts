export class LinkModel {
  id: number;
  title: string;
  href: string;

  constructor(json) {
    Object.assign(this, json)
  }
}
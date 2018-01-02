export class Snippet {
  id: number;
  title: string;
  description: string;
  sref: string;

  constructor(json) {
    Object.assign(this, json)
  }
}
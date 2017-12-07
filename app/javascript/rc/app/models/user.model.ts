export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: any;

  constructor(json) {
    Object.assign(this, json)
  }
}
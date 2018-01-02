export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: any;
  user_id: number;
  is_admin: boolean;

  constructor(json) {
    Object.assign(this, json)
  }
}
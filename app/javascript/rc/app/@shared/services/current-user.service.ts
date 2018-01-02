import { Injectable } from "@angular/core";
import { User } from 'models';

@Injectable()
export class CurrentUserService {

  public getUser(): User {
    let token = localStorage.getItem('token');
    return JSON.parse(atob(token.split('.')[1]));
  }

}
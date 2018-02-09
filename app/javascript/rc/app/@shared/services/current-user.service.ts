import { Injectable } from "@angular/core";
import { UserModel } from '@shared/models/user.model';

@Injectable()
export class CurrentUserService {

  public getUser(): UserModel {
    let token = localStorage.getItem('token');
    return JSON.parse(atob(token.split('.')[1]));
  }

}
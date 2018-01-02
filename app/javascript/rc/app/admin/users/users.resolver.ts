import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'services';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private users: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.users.index();
  }
}

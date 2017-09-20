import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService } from '@services';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminUsersListResolver implements Resolve<any> {
  constructor(private users: UsersService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.users.index();
  }
}

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserApiService } from '@shared/services/api/user.api.service';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private users: UserApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.users.index();
  }
}

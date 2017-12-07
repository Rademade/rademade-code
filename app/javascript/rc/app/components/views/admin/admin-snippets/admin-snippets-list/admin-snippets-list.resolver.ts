import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminSnippetsListResolver implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot) {
  }
}

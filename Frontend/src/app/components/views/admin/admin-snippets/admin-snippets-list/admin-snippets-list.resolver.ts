import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SnippetsService } from '@services';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminSnippetsListResolver implements Resolve<any> {
  constructor(private snippets: SnippetsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.snippets.index();
  }
}

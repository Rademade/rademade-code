import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SnippetsService } from 'services';

@Injectable()
export class SnippetsResolver implements Resolve<any> {
  constructor(private snippets: SnippetsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.snippets.index();
  }
}

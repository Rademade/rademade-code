import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SnippetsApiService } from '@shared/services/api/snippets.api.service';

@Injectable()
export class SnippetsResolver implements Resolve<any> {
  constructor(private snippets: SnippetsApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.snippets.index();
  }
}

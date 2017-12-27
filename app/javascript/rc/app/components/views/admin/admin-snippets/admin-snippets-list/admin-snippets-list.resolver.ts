import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SnippetService } from "services";

@Injectable()
export class AdminSnippetsListResolver implements Resolve<any> {
  constructor(private snippets: SnippetService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.snippets.index();
  }
}

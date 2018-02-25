import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';

@Injectable()
export class ChecklistsResolver implements Resolve<any> {
  constructor(private checklists: ChecklistsApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.checklists.index();
  }
}
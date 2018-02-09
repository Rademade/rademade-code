import { Injectable } from '@angular/core';
import { BaseApiService } from '@shared/services/api/base.api.service';
import { Response } from '@angular/http';

@Injectable()
export class ChecklistsApiService extends BaseApiService {
  modelUrl = 'checklists';

  createItem(checklistId,options: {}) {
    return this.http.post(this.apiUrl + this.modelUrl + '/' + checklistId + '/' + 'checklist_items', options).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
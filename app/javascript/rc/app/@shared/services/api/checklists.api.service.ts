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
  destroyItem(checklistId,id) {
    return this.http.delete(this.apiUrl + this.modelUrl + '/' + checklistId + '/' + 'checklist_items'+ '/' + id).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
  updateItem(options: {}, id: number, checklistId) {
    return this.http.put(this.apiUrl + this.modelUrl + '/' + checklistId + '/' + 'checklist_items'+ '1' + id, options).map(
      (response: Response) => {
        return response.json();
      },
    );
  }
}
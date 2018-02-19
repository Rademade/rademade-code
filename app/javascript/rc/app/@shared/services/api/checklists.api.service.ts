import { Injectable } from '@angular/core';
import { BaseApiService } from '@shared/services/api/base.api.service';
import { Response } from '@angular/http';

@Injectable()
export class ChecklistsApiService extends BaseApiService {
  modelUrl = 'checklists';
}
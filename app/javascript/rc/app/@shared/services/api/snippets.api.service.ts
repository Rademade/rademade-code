import { Injectable } from '@angular/core';
import { BaseApiService } from '@shared/services/api/base.api.service';

@Injectable()
export class SnippetsApiService extends BaseApiService {
  modelUrl = 'snippets';
}
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class SnippetsService extends BaseService {
  modelUrl = 'snippets';
}
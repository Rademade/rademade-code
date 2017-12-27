import { Injectable } from '@angular/core';
import { BaseService } from 'services/base.service';

@Injectable()
export class SnippetService extends BaseService {
  modelUrl = 'snippets';
}
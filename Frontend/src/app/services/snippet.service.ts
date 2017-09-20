import { Injectable } from '@angular/core';
import { HttpService } from '@services';

@Injectable()
export class SnippetsService extends HttpService {
  modelUrl = 'snippets';
}
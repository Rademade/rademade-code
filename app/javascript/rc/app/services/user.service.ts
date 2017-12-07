import { Injectable } from '@angular/core';
import { BaseService } from 'services/base.service';

@Injectable()
export class UserService extends BaseService {
  modelUrl = 'users';
}
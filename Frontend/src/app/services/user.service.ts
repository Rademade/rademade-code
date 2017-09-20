import { Injectable } from '@angular/core';
import { HttpService } from '@services';

@Injectable()
export class UsersService extends HttpService {
  modelUrl = 'users';
}
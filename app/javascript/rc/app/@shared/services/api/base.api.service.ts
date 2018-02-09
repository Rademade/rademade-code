import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class BaseApiService {
  public apiUrl: string = '/api/v1/';
  public modelUrl: string = '';
  constructor(
    public http: AuthHttp,
  ) {}

  create(options: {}) {
    return this.http.post(this.apiUrl + this.modelUrl, options).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  index() {
    return this.http.get(this.apiUrl + this.modelUrl).map(
      (response: Response) => {
        return response.json();
      }
    );

  }
  destroy(id) {
    return this.http.delete(this.apiUrl + this.modelUrl + '/' + id).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
  update(options: {}, id: number) {
    return this.http.put(this.apiUrl + this.modelUrl + '/' + id, options).map(
      (response: Response) => {
        return response.json();
      },
    );
  }
}
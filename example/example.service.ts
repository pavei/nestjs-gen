import { Example } from './example.entitiy';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUtil } from '@app/shared/service/requestutil';
import { environment } from '@env/environment';

const APP_URL = `${environment.url_rest}/examples`;

@Injectable()
export class ExampleService {


  constructor(
      private http: HttpClient,
      private requestUtil: RequestUtil) {}

  async list(): Promise<Example[]> {
    const requestObj = await this.requestUtil.getDefaultRequestOptions();
    return this.http.get(APP_URL, requestObj).toPromise() as Promise<Example[]>;
  }

  async find(id): Promise<Example> {
    const requestObj = await this.requestUtil.getDefaultRequestOptions();
    return this.http.get(APP_URL + '/' + id, requestObj).toPromise() as Promise<Example>;
  }

  async save(entity: Example) {
    const requestObj = await this.requestUtil.getDefaultRequestOptions();
    return this.http.post(APP_URL, entity, requestObj).toPromise();
  }

  async update(entity: Example) {
    const requestObj = await this.requestUtil.getDefaultRequestOptions();
    return this.http.put(APP_URL + '/' + entity.id, entity, requestObj).toPromise();
  }

  async delete(id: number) {
    const requestObj = await this.requestUtil.getDefaultRequestOptions();
    return this.http.delete(APP_URL + '/' + id, requestObj).toPromise();
  }

}


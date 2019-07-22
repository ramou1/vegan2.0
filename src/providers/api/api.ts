import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { config } from '../../config';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  public alunos: any[] = [];

  constructor(public _http: HttpClient, private storage: Storage, public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

}

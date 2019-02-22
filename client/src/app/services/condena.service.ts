import { Injectable } from '@angular/core';
import { urlServer } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Condena } from '../models/condena';

@Injectable()
export class CondenaService {

  readonly uri = `${urlServer}/condena`;

  constructor(private http: HttpClient) { }

  getCondenas(): Observable<any> {
    return this.http.get(this.uri);
  }

  postCondena(condena: Condena): Observable<any> {
    return this.http.post(this.uri, condena);
  }

}

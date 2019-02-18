import { Injectable } from '@angular/core';
import { urlServer } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PrisioneroService {

  readonly uri = `${urlServer}/prisionero `;

  constructor(private http: HttpClient) { }

  getPrisioneros(): Observable<any> {
    return this.http.get(this.uri);
  }

}

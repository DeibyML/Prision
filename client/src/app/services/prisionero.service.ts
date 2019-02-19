import { Injectable } from '@angular/core';
import { urlServer } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Prisionero } from '../models/prisionero';

@Injectable()
export class PrisioneroService {

  readonly uri = `${urlServer}/prisionero `;

  constructor(private http: HttpClient) { }

  getPrisioneros(): Observable<any> {
    return this.http.get(this.uri);
  }

  postPrisionero(prisionero: Prisionero): Observable<any> {
    return this.http.post(this.uri, prisionero);
  }

  deletePrisioner(idPrisionero: string): Observable<any> {
    return this.http.delete(`${ this.uri }/${idPrisionero}`);

  }

}

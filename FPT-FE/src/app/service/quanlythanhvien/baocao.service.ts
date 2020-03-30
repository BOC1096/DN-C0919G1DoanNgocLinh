import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaocaoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/baocao';

  search(curentPage, size, xuly, start, end): Observable<any> {
    return this.http.get((this.baseUrl + '/search'), {
      params: {
        page: curentPage, size: size, xuly: xuly, start: start, end: end
      }
    });
  }
  getAll(curentPage, size, xuly): Observable<any> {
    return this.http.get((this.baseUrl), {
      params: {
        page: curentPage, size: size, xuly: xuly
      }
    });
  }
}

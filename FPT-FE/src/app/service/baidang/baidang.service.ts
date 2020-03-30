import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaidangService {

  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/baidang';

  getAllBaiDang(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // @ts-ignore
  seach(keyword: string): Observable<any> {
    return this.http.get(this.baseUrl + '?search=' + keyword);
  }

  createBaiDang(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  deleteBaiDang(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getBaiDang(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}

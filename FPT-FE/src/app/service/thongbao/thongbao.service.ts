import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThongBaoService {

  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/thongbao';

  getAllThongBao(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createThongBao(obj: any): Observable<any> {
    return this.http.post(this.baseUrl + '/update', obj);
  }

  deleteThongBao(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getThongBao(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}

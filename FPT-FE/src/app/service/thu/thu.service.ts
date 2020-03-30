import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThuService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/thu';

  getAllThu(): Observable<any> {
    return this.http.get(this.baseUrl + "/allthu");
  }

  createThu(obj: any): Observable<any> {
    return this.http.post(this.baseUrl + "/taomoithu", obj);
  }

  deleteThu(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/delete/' + id);
  }
  getThu(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/thu/' + id);
  }
  getThanhVienNhan(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/nguoinhan/" + id)
  }
  getThanhVienGui(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/nguoigui/" + id)
  }
}

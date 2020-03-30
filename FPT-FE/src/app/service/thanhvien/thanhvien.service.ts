import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThanhvienService {

  private baseUrl = 'http://localhost:8080/api/thanhviens';
  private baseUploadUrl = 'http://localhost:8080/api/upload';


  constructor(private http: HttpClient) { }

  getThanhvien(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createThanhvien(thanhvien: any): Observable<any> {
    return this.http.post(this.baseUrl, thanhvien);
  }
  putThanhvien(thanhvien: any): Observable<any> {
    return this.http.put(this.baseUrl, thanhvien);
  }
  
  uploadImg(uploadData:any,id:number) {
    return this.http.post(`${this.baseUploadUrl}/${id}`,  uploadData);
  }

  getThanhvienList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}

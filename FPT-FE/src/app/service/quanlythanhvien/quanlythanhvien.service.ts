import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class QuanlythanhvienService {
  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  private baseUrl = 'http://localhost:8080/qlthanhvien';

  getAll(isVip: string, curentPage, size, search): Observable<any> {
    return this.http.get(this.baseUrl + '/get/' + isVip + '?page=' + curentPage + '&size=' + size + '&search=' + search, this.httpOptions);
  }
  getThanhVien(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id, this.httpOptions);
  }
  changeVip(obj: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + obj.idThanhVien, obj, this.httpOptions);
  }

  getThanhVienByUser(username: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + '?username=' + username, this.httpOptions);
  }
}

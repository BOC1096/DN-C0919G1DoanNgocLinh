import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoiNhom } from 'src/app/model/hoinhom';

@Injectable({
  providedIn: 'root'
})
export class HoiNhomService {

  constructor(  private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/hoinhom';

  getAllHoiNhom(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // @ts-ignore
  // search(keyword: string): Observable<any> {
  //   return this.http.get(this.baseUrl + '?search=' + keyword);
  // }

  createHoiNhom(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }

  deleteNhomThanhVien(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/xoanhomthanhvien/' + id);
  }
  getHoiNhom(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  updateSoLanCanhCao(hoiNhom:HoiNhom): Observable<HoiNhom> {
    return this.http.patch<HoiNhom>(this.baseUrl + '/capnhatcanhcao/' + hoiNhom.idHoiNhom, hoiNhom);
  }
  getNhomThanhVien(id:number): Observable<any> {
    return this.http.get(this.baseUrl + '/nhomthanhvien/' + id);
  }
  getNoiDung(id:number):Observable<any>{
    return this.http.get(this.baseUrl + '/noidungdangtrongnhom/' + id);
  }
  getSoThanhVien(id:number):Observable<any>{
    return this.http.get(this.baseUrl + '/sothanhvien/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormControl
} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  emails = [];
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/customer';

  getAllCustomer(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createCustomer(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }
  deleteService(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getService(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  editCustomer(obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + obj.id, obj);
  }
  getList() {
    const promise = this.getAllCustomer().toPromise();
     promise.then(data => {
      for (let cus of data) {
        this.emails.push(cus.email);
      }
    });
  }
  checkIfEmailExists(email: string): Observable<boolean> {
    this.getList();
    console.log(this.emails);
    return of(this.emails.includes(email)).pipe(delay(1000));
  }
  emailValidator(): AsyncValidatorFn {
    console.log(this.checkIfEmailExists('linh@gmail.com'));
    return (control: FormControl): Observable<ValidationErrors | null> => {
      return this.checkIfEmailExists(control.value).pipe(
        map(res => {
          console.log(res);
          console.log('a');
          return res ? { emailExists: true } : null;
        })
      );
    };
  }
}

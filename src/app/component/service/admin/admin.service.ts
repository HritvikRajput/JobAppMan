import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = "https://localhost:3000/";
  constructor(private http: HttpClient) { }
  login(email: any, pass: any): Observable<any> {
    return this.http.post(this.baseURL + 'admin/login', {
      email: email,
      password: pass
    });
  }
  getApplicationList(): Observable<any> {
    return this.http.get(this.baseURL + 'admin/jobApplicants')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  domain = 'http://localhost:3000/api/'
  login(data) {
    return this.http.post(this.domain + 'login', data).toPromise()
  }
  register(data) {
    return this.http.post(this.domain + 'register', data).toPromise()
  }
}

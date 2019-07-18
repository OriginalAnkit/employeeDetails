import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  domain = environment.url;
  getToken() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('authorization', atob(localStorage.getItem('token')));

    return headers;
  }
  login(data) {
    return this.http.post(this.domain + 'login', data).toPromise();
  }
  register(data) {
    return this.http.post(this.domain + 'register', data).toPromise();
  }
  getEmployees(){
    return this.http.get(this.domain+'employees',{headers:this.getToken()}).toPromise();
  }
  getEmployeeById(id){
    return this.http.get(this.domain+`employee/${id}`,{headers:this.getToken()}).toPromise();
  }
  updateUserDetails(id,body){
    return this.http.put(this.domain + `employee/${id}`, body, { headers: this.getToken() }).toPromise()
  }
}

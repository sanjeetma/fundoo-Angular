import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../model/user'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

 private apiurl = environment.apiUrl;

private httpOptions = {
   headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

  registerUser(user: any)
  {
    return this.http.post(this.apiurl + 'user/registration', user);
  }
  loginUser(user: any): Observable<any> {
    return this.http.post(this.apiurl + 'user/login', user, this.httpOptions);
  }
  forgetPassword(email: any): Observable<any> {
  //  console.log(email);
    return this.http.post<any>(this.apiurl + 'user/forget', email, this.httpOptions);
  }
  resetPassword(resetpassword: any, token: any): Observable<any> {
    console.log('under reset');
    console.log(resetpassword+"    "+token)
    return this.http.post<any>(this.apiurl + 'user/reset', resetpassword, { headers: new HttpHeaders().set('token', token) });
  }

}

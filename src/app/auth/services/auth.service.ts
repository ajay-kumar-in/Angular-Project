import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiUrl = 'your url';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  token: string = '';
  authStatusListener = new BehaviorSubject<boolean>(false)
  isAuthenticated: boolean = false;
  authToken: any;

  constructor(
    private http: HttpClient
  ) { 
    //---temp method call fron here
    this.onLogin('');
  }

  getAuthorizationToken() {
    return this.authToken;
  }

  getUserAuthStatus() {
    this.authStatusListener.asObservable();
  }

  onLogin(loginData: any) {
    // dummy values to show temporarly
    this.authToken = 'dummy token data';
    this.authStatusListener.next(true);
    
    //-----impiment your method----------
    // return this.http.post(this.apiUrl, loginData, this.httpOptions).pipe(
    //   tap((res: any)=> {
    //    if(res.token) {
    //      this.authToken = res.token;
    //     this.isAuthenticated = true;
    //     this.authStatusListener.next(true);
    //    }
    //   })
    // )
  }


}

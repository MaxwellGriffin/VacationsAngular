import { Injectable, Output, EventEmitter } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Api_Url } from 'src/environments/environment.prod';
import { UserMetaData } from '../models/UserMetaData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  
  isLoggedIn = new Subject<boolean>();

  @Output() userLoggedIn: EventEmitter<any> = new EventEmitter();

  constructor(private _http: HttpClient, private _router: Router) { }
 

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/api/Account/register`, regUserData);
  }

  login(loginInfo){
    const str = 
    `grant_type=password&username=${encodeURI(loginInfo.Email)}&password=${encodeURI(loginInfo.Password)}`;
    return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) =>{
      this.isLoggedIn.next(true);
      localStorage.setItem('id_token', token.access_token);
      localStorage.setItem('userName', token.userName);
      this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() }).subscribe((userMetaData: UserMetaData) => {
        localStorage.setItem('userId', userMetaData.UserID);
        localStorage.setItem('userRole', userMetaData.UserRole);
      });
      this.userLoggedIn.emit();
      this._router.navigate(['/']);
    });
  }

  getUserInfo(){
    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }
    console.log("currentuser() called");
    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.userLoggedIn.emit();
    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() });
    this._router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders{
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

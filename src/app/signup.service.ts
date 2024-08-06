import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from './models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private _http : HttpClient) { }
  // public signUp(signUp : SignUp):Observable<any>{
   
  //   return this._http.post<signUp>("http://localhost:8020/member/")
  // }
  
}

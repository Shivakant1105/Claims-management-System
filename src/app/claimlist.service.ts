import { Injectable } from '@angular/core';
import { ClaimList } from './models/claimlist';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimlistService {

  constructor(private _http :HttpClient) { }


  public claimList():Observable<ClaimList>{
   
    return this._http.get<ClaimList>("http://localhost:8090/claims/allClaims")
  }
}

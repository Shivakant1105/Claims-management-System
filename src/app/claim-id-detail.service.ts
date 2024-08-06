import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { claimIdDetail } from './models/claimiddetail';

@Injectable({
  providedIn: 'root'
})
export class ClaimIdDetailService {
  

  constructor(private _http :HttpClient) { }

  public claimIdDetail(claimId:string):Observable<claimIdDetail>{
    console.log('claimIdfromservice====>', claimId);
    
   
    return this._http.get<claimIdDetail>("http://localhost:8090/claims/"+claimId)

  }
}

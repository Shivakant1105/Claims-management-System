import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './models/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicydataService {
  static policyData: any;

  constructor(private _http : HttpClient) { }

  public policyData(policyData :Policy):Observable<Policy[]>{
    
    return this._http.get<Policy[]>("http://localhost:8020/member/viewBills/"+policyData.id+"/"+policyData.name);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from './models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private _http : HttpClient) { }

  public provider(provider :Provider):Observable<Provider[]>{
    
    return this._http.get<Provider[]>("http://localhost:8020/member/viewBills/"+provider.provider_id+"/"+provider.provider_name);
  }

 
}

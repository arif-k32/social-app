import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterHttpService {

  constructor(private readonly httpClient:HttpClient, private readonly data:DataSupplyService) { }

  public registerUser(details:any):Observable<any>{
    return this.httpClient.post(`${environment.api}/auth/register`,details)
  }



}

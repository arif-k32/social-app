import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  constructor(private readonly httpClient:HttpClient, private readonly data:DataSupplyService) { }

  public isAuthorized():Observable<any>{
    if(localStorage.getItem('access_token'))
        return of('true')
    return of('false');

  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  constructor(private readonly httpClient:HttpClient,) { }

  public isAuthorized():Observable<any>{
    if(localStorage.getItem('access_token'))
        return of('true')
    return of('false');

  }



}

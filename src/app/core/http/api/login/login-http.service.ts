import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public login(details:any):Observable<any>{
    return this.httpClient.post(`${environment.api}/auth/login`,details);
  }



}

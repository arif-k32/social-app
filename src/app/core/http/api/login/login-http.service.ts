import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private readonly httpClient:HttpClient, private readonly data:DataSupplyService) { }

  public login(details:any):Observable<string>{
    const index = this.data.userDb.findIndex((user:any)=> user.email == details.email && user.password == details.password)
    if(index>=0){
      return of('success')
    }
    else
      return of('error')
  }



}

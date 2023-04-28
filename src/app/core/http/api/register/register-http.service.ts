import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterHttpService {

  constructor(private readonly httpClient:HttpClient, private readonly data:DataSupplyService) { }

  public registerUser(details:any):Observable<string>{
    this.data.userDb.push({email:details.email,password:details.password})
    const index = this.data.userDb.findIndex((user:any)=> user.email == details.email && user.password == details.password)
    if(index>=0){
      return of('success')
    }
    else
      return of('error')
  }



}

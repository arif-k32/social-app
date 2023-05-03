import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  constructor(private readonly httpClient:HttpClient, private readonly data:DataSupplyService) { }

  public postPhoto(file:FormData):Observable<any>{
    //  this.data.users[3].posts.push()
     return of('success');
  }
}

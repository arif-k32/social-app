import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';

@Injectable({
  providedIn: 'root'
})
export class PostsHttpService {

  constructor(private readonly httpClient:HttpClient, private readonly data:DataSupplyService) { }

  public postPhoto(file:FormData):Observable<any>{
     return of('success');
  }
}

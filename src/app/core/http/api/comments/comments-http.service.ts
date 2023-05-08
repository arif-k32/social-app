import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public commentOnPost(comment:string, post_id:string):Observable<any>{
    const body={
                  post_id:post_id,
                  comment:comment
                }
    return this.httpClient.post(`${environment.api}/comments/`,body);
  }
}

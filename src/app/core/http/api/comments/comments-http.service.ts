import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public commentOnPost(body:{post_id:string, content:string}):Observable<any>{
    return this.httpClient.post(`${environment.api}/comments/`,body).pipe( map((response:any)=>{
                                                                            response.author.picture=environment.api+'/pictures/'+response.author.picture;
                                                                            response.comment.author.picture=environment.api+'/pictures/'+response.comment.author.picture;
                                                                            return response;
                                                                      }));
  }
}

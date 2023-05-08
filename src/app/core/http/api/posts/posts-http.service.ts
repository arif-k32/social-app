import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsHttpService {
  

  constructor(private readonly httpClient:HttpClient, ) { }

  

  public createNewPost(file: FormData):Observable<any> {
    return this.httpClient.post(`${environment.api}/posts/`,file);
  }
  public getPostsByUserName(username:string):Observable<any>{
    return this.httpClient.get(`${environment.api}/posts/${username}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public getProfile(username:string):Observable<any>{
    return this.httpClient.get(`${environment.api}/profile/${username}`);
  }

  public setProfilePicture(file:FormData):Observable<any>{
    return this.httpClient.post(`${environment.api}/profile/picture`,file);
  }

  public updateProfile(details:any):Observable<any>{
    return this.httpClient.post(`${environment.api}/profile/`,details);
  }

  public createNewPost(file:FormData):Observable<any>{
    return this.httpClient.post(`${environment.api}/posts/`,file);
  }
}

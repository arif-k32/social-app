import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public getProfile(username:string):Observable<any>{
    return this.httpClient.get(`${environment.api}/profile/${username}`).pipe(map((user:any)=>{
                                                                                user.picture=environment.api+'/pictures/'+user.picture;
                                                                                return user;
                                                                          }));
  }

  public setProfilePicture(file:FormData):Observable<any>{
    return this.httpClient.post(`${environment.api}/profile/picture`,file);
  }

  public updateProfile(details:any):Observable<any>{
    return this.httpClient.post(`${environment.api}/profile/`,details);
  }

  
  public getCurrentUser():Observable<ICurr_user>{
    return this.httpClient.get<ICurr_user>(`${environment.api}/profile/`).pipe(map((user:any)=>{
                                                                                user.picture=environment.api+'/pictures/'+user.picture;
                                                                                return user;
                                                                          }));
  }

  

 
  
}





import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendsHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public getAvailableUsers():Observable<any>{
    return this.httpClient.get(`${environment.api}/users`)
  }

  public sendFriendRequest(username:string):Observable<any>{
    let params = new HttpParams();
    params =params.append('username',username)
    return  this.httpClient.post(`${environment.api}/friendships/send`,{},{params})
  }
  public acceptFriendRequest(username:string):Observable<any>{
     let params = new HttpParams();
     params = params.append('username',username);
     return this.httpClient.post(`${environment.api}/friendships/accept`, {}, {params})
  }

  public friendRequests():Observable<any>{
    return this.httpClient.get(`${environment.api}/friendships/requests`)
  }

  public getCurrentFriends():Observable<any>{
    return this.httpClient.get(`${environment.api}/friendships/`)
  }
 
}

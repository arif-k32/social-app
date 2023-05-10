import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendsHttpService {

  constructor(private readonly httpClient:HttpClient) { }

  public getAvailableUsers():Observable<any>{
    return this.httpClient.get(`${environment.api}/users`).pipe(map((getAvailableUsers:any)=>{
                                                                    for (const user of getAvailableUsers) 
                                                                        user.picture=environment.api+'/pictures/'+user.picture;  
                                                                    return getAvailableUsers;
                                                              }));
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
    return this.httpClient.get(`${environment.api}/friendships/requests`).pipe(map((requests:any)=>{
                                                                                  for (const request of requests) 
                                                                                      request.sender.picture=environment.api+'/pictures/'+request.sender.picture;  
                                                                                  return requests;
                                                                            }));
  }

  public getCurrentFriends():Observable<any>{
    return this.httpClient.get(`${environment.api}/friendships/`).pipe(map((friends:any)=>{
                                                                            for (const friend of friends) 
                                                                                friend.picture=environment.api+'/pictures/'+friend.picture;  
                                                                            return friends;
                                                                      }));
  }
 
}

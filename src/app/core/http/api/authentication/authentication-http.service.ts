import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ProfileHttpService } from '../profile/profile-http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

      constructor(private readonly profileHttp:ProfileHttpService) { }

      public isAuthorized():Observable<boolean>{
              if(localStorage.getItem('access_token')){
                  return this.profileHttp.getCurrentUser().pipe(map((response:any)=>{ 
                                                                        if(response)
                                                                            return true;
                                                                        else  
                                                                            return false;
                                                                  }),
                                                                catchError((error:any)=>{
                                                                      console.log(error);
                                                                      return of(false)
                                                                  })
                                                              
                                                            )
                                                      
              }
              else
                  return of(false);
      }



}

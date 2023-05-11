import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild, CanActivateChildFn, Router } from '@angular/router';
import { AuthenticationHttpService } from '../../http/api/authentication/authentication-http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate, CanActivateChild {

  constructor(private readonly authenticationHttp:AuthenticationHttpService, private readonly router:Router){}

  public getAuth(){
                      this.authenticationHttp.isAuthorized().subscribe((response:boolean)=>{
                                                                      if(response==false)
                                                                      {
                                                                        this.router.navigate(['/login']);
                                                                        return false;
                                                                      }
                                                                      else return true;
                                                              })
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
       this.getAuth();
  }
  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
    this.getAuth();
  }
  
}

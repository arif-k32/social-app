import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationHttpService } from 'src/app/core/http/api/authentication/authentication-http.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  logOutButton:boolean=false;

  constructor(private readonly router:Router,private readonly authenticationHttp:AuthenticationHttpService){}

  public logOut():void{
    localStorage.removeItem('access_token');
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
      this.authenticationHttp.isAuthorized().subscribe((auth:boolean)=>{
                                                    if(auth)
                                                        this.logOutButton=true;
                                              })
  }
}

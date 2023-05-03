import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

  constructor(private readonly router:Router){}

  public logOut():void{
    localStorage.removeItem('access_token');
    this.router.navigate(['login'])
  }
}

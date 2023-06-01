import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-settings-and-privacy',
  templateUrl: './settings-and-privacy.component.html',
})
export class SettingsAndPrivacyComponent  {

  constructor(private readonly darkModeService:DarkModeService){}


  public toggleDarkMode():void{
    this.darkModeService.toggleDarkMode();
  }

  
}

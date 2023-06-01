import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-settings-and-privacy',
  templateUrl: './settings-and-privacy.component.html',
})
export class SettingsAndPrivacyComponent  {
  public darkMode:boolean=false;

  constructor(private readonly darkModeService:DarkModeService){
      this.darkMode=darkModeService.initializeDarkMode();
  }


  public toggleDarkMode():void{
    this.darkMode=!this.darkMode;
    this.darkModeService.onDarkModeChange(this.darkMode)
    localStorage.setItem('darkMode',this.darkMode.toString());
  }

  
}

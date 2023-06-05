import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService  {

  public darkMode = signal<boolean>(false);

  constructor(){
      this.initializeDarkMode();
  }


  public initializeDarkMode():void { 
        if(localStorage.getItem('darkMode') !== null)[
          this.darkMode.set(JSON.parse(localStorage.getItem('darkMode') || '{}'))
        ]
  }

  public toggleDarkMode():void{
    localStorage.setItem('darkMode',JSON.stringify(!this.darkMode()))
    this.darkMode.set(!this.darkMode())
  }


  

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService  {

  private darkModeSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); //sets default value

  constructor(){
      this.initializeDarkMode();
  }

  public initializeDarkMode():void { 
        const storedMode = localStorage.getItem('darkMode');
        const currentMode = storedMode !== null ? JSON.parse(storedMode) : null;
        if(currentMode == null){
          const defaultMode = this.darkModeSubject.value;
          this.darkModeSubject.next(defaultMode);
          localStorage.setItem('darkMode',defaultMode.toString())
        }
        else{
          this.darkModeSubject.next(currentMode)
        }
  
  }

  public watchDarkMode():Observable<boolean>{
      return this.darkModeSubject.asObservable();
  }


  public toggleDarkMode():void{
      this.darkModeSubject.next(!this.darkModeSubject.value)
      localStorage.setItem('darkMode',JSON.stringify(!this.darkModeSubject.value))
  }


  

}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private darkModeSubject = new Subject<boolean>();

  public initializeDarkMode():boolean { 
      if(localStorage.getItem('darkMode')== 'true')
        return true;
      else{
        localStorage.setItem('darkMode','false');
        return false;
      }
  }

  public watchDarkMode():Observable<boolean>{
      return this.darkModeSubject.asObservable();
  }
  public onDarkModeChange(value:boolean):void{
      this.darkModeSubject.next(value);
  }

}

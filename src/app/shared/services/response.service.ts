import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }
  public closeCreateAccount= new Subject<string>();
  public onCloseCreateAccount(response:string):void{
    this.closeCreateAccount.next(response);
  }
  public getCloseCreateAccount():Observable<string>{
    return this.closeCreateAccount.asObservable();
  }

}

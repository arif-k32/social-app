import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICurr_user } from '../interfaces/current-user/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private notifyParentSubject = new Subject<ICurr_user>();

  public notificationToParent():Observable<ICurr_user>{
      return this.notifyParentSubject.asObservable();
  }

  public notifyParent(curr_user:ICurr_user):void{
      this.notifyParentSubject.next(curr_user);
  }


}

import { Component } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  
  dat!:any;
  img="https://loveshayariimages.in/wp-content/uploads/2022/08/i-am-sad-profile-pic.jpg"
  api!:string;
  curr_user$!:Observable<any>;
  constructor(private readonly profileHttp:ProfileHttpService){
        
        this.curr_user$=profileHttp.getCurrentUser();
        this.api=environment.api;
  }
  
  
  
}

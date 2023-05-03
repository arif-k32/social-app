import { Component } from '@angular/core';
import { DataSupplyService } from '../../../../shared/services/data-supply.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  
  dat!:any;
  img="https://loveshayariimages.in/wp-content/uploads/2022/08/i-am-sad-profile-pic.jpg"
  api!:string;
  curr_user$!:Observable<any>;
  constructor(private readonly data:DataSupplyService,private readonly profileHttp:ProfileHttpService){
        this.dat=data.users;
        this.curr_user$=profileHttp.getProfile('arifk');
        this.api=environment.api;
  }
  
  
  
}

import { Component } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  curr_user!:any;

  constructor(private readonly profileHttp:ProfileHttpService){
      profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{ this.curr_user = currUser});
  }

}

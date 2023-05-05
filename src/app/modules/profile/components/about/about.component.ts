import { Component } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  curr_user!:any;

  constructor(private readonly profileHttp:ProfileHttpService){
      profileHttp.getProfile('arifk').subscribe((response)=>{
                                              this.curr_user=response;
                                                              })
  }

}

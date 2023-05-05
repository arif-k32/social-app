import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent  {
  curr_user!:any;

  uploadProfile =false;

  test='arifk';


  constructor(private readonly data:DataSupplyService,private readonly profileHttp:ProfileHttpService){ 
      this.getProfile(this.test);
  }

  public getProfile(username:string):void{
    this.profileHttp.getProfile(username).subscribe((response)=>{ 
                                              this.curr_user=response;
                                              this.curr_user.picture=environment.api+'/pictures/'+response.picture;
                                            })
  }

  public toggleUploadProfile():void{
      this.uploadProfile=!this.uploadProfile;
  }

  public uploadProfilePic(fileToUpload:FormData):void{
    this.profileHttp.setProfilePicture(fileToUpload).subscribe((response)=>{
                                                                  this.toggleUploadProfile();
                                                                  this.getProfile(this.test)
                                                        })
  }

  

}

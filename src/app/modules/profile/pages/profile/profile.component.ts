import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit  {
  curr_user!:any;

  uploadProfile =false;



  constructor(private readonly profileHttp:ProfileHttpService, private readonly notify:NotifyService, private readonly activatedRoute:ActivatedRoute ){ 
    this.getProfile();
  }

  public notification:Subscription = this.notify.notificationToParent().subscribe((currUser:ICurr_user)=>{ 
          this.getProfile();
    });

  public getProfile():void{
    this.profileHttp.getCurrentUser().subscribe((response)=>{ 
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
                                                                 this.getProfile();
                                                        })
  }

  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe((params:{[username:string]:string})=>{
          console.log(params);
     })
  }

  

}

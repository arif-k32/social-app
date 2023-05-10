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


  public user_profile!:any;
  public uploadButton=false;
  public uploadProfile=false;



  constructor(private readonly profileHttp:ProfileHttpService, private readonly notify:NotifyService, private readonly activatedRoute:ActivatedRoute ){  }

  public notification:Subscription = this.notify.notificationToParent().subscribe((currUser:ICurr_user)=>{ 
          this.getCurrUser();
    });

  public getCurrUser():void{
    this.profileHttp.getCurrentUser().subscribe((response)=>{ 
                                              this.setUploadButton();
                                              this.user_profile=response;
                                            })
  }
  public getProfile(username:string):void{
    this.profileHttp.getProfile(username).subscribe((profile)=> {
                                                this.unSetUploadButton();
                                                this.user_profile=profile ;
                                          });
  }

  public toggleUploadProfile():void{
      this.uploadProfile=!this.uploadProfile;
  }
  public setUploadButton():void{
     this.uploadButton=true;
  }
  public unSetUploadButton():void{
    this.uploadButton=false;
  }

  public uploadProfilePic(fileToUpload:FormData):void{
    this.profileHttp.setProfilePicture(fileToUpload).subscribe((response)=>{
                                                                this.toggleUploadProfile();
                                                                this.getCurrUser();
                                                        })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:{[username:string]:string})=>{
            this.profileHttp.getCurrentUser().subscribe((currUser)=>{
                                                    if(params['username'] && (params['username'] != currUser.username)){
                                                        this.getProfile(params['username']);
                                                    }
                                                    else{
                                                      this.getCurrUser();
                                                    }
                                              })
                                            
                                      })
  }

  

}

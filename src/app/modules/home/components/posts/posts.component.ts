import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { DataSupplyService } from '../../../../shared/services/data-supply.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {


  public curr_username!:string;
  public curr_user!:any;
  public postPhoto=false;


  constructor(private readonly data:DataSupplyService, private readonly profileHttp:ProfileHttpService){
        this.curr_username=data.curr_username;
        this.dat=data.users;
        profileHttp.getProfile(this.curr_username).subscribe((response)=>{
                                                      this.curr_user=response;
                                                })
  }
  dat!:any;

  public togglePostPhoto():void{
    this.postPhoto=!this.postPhoto;
  }

  public createNewPost(fileToUpload:FormData):void{
      this.profileHttp.createNewPost(fileToUpload).subscribe((response)=>{
                                                            this.togglePostPhoto();
                                                        })
  }

  
  
}

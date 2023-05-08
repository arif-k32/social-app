import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent implements OnInit {
  
  
  
  curr_user!:any;
  friends!:any;
  constructor(private readonly profileHttp:ProfileHttpService, private readonly friendsHttp:FriendsHttpService){
       
  }


  public loadCurrentUser():void{
    this.profileHttp.getCurrentUser().subscribe((currUser)=>{ 
                        currUser.picture=environment.api+'/pictures/'+currUser.picture;
                        this.curr_user=currUser;  
                    })
  }
  public loadFriends():void{
    this.friendsHttp.getCurrentFriends().subscribe((response:any)=> {
                                            for(let friend of response){
                                              friend.profile_pic=environment.api+'/pictures/'+friend.picture;
                                              friend.active=true;
                                            }
                                            this.friends = response; 
                                          })
  }



  
  ngOnInit(): void {
      this.loadCurrentUser();
      this.loadFriends();
  

  }
  
}

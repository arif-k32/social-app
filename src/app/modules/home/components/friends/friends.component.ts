import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent implements OnInit {
  
  
  
  curr_user!:any;
  friends!:any;
  constructor(private readonly profileHttp:ProfileHttpService, private readonly friendsHttp:FriendsHttpService, private readonly router:Router){}


  public loadCurrentUser():void{
    this.profileHttp.getCurrentUser().subscribe((currUser)=>{ 
                        // currUser.picture=environment.api+'/pictures/'+currUser.picture;
                        this.curr_user=currUser;  
                    })
  }
  public loadFriends():void{
    this.friendsHttp.getCurrentFriends().subscribe((response:any)=> {
                                            let uniqueFriends:any[]=response.filter((obj:any, index:any, self:any) => index === self.findIndex((o:any) => o.username === obj.username));
                                            for(let friend of uniqueFriends){
                                              friend.profile_pic=friend.picture;
                                              friend.active=true;
                                            }
                                            this.friends = uniqueFriends; 
                                          })
  }



  
  ngOnInit(): void {
      this.loadCurrentUser();
      this.loadFriends();
  

  }
  
}

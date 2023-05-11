import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends.component.html',
})
export class FriendsComponent implements OnInit {

  friends!:any;

  constructor( private readonly friendsHttp:FriendsHttpService, private readonly router:Router){}


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
    this.loadFriends();
  }


}

import { Component, OnInit } from '@angular/core';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends.component.html',
})
export class FriendsComponent implements OnInit {

  friends!:any;

  constructor( private readonly friendsHttp:FriendsHttpService){}

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
    this.loadFriends();
  }


}

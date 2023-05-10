import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-new-friends',
  templateUrl: './add-new-friends.component.html',
})
export class AddNewFriendsComponent implements OnInit {


  availableUsers!:any;
  friendRequests!:any;



  constructor(private readonly friendsHttp:FriendsHttpService, private readonly profileHttp:ProfileHttpService, private readonly router:Router){}


  public loadAvailableUsers():void{
    this.friendsHttp.getAvailableUsers().subscribe((response:any)=>{
                                                for(let user of response){
                                                  this.profileHttp.getProfile(user.username).subscribe((resonse)=>{  user.profile_pic=resonse.picture  })
                                                }
                                                response=response.filter((user:any)=> user.friendship == false)
                                                this.availableUsers=response;
                                          })
  }
  public loadFriendRequests():void{
    this.friendsHttp.friendRequests().subscribe((requests:any)=>{
                                              requests=requests.filter((request:any)=>request.status == 'pending')
                                              this.friendRequests=requests;
                                        })
  }


  public sendFriendRequest(username:string):void{
    this.friendsHttp.sendFriendRequest(username).subscribe((response)=>this.loadAvailableUsers())
  }

  public acceptFriendRequest(username:any):void{
      this.friendsHttp.acceptFriendRequest(username).subscribe((r)=>console.log(this.loadFriendRequests()))
  }

  public reRouteToProfile(username:string):void{
      this.router.navigate(['profile'],{queryParams:{username:username}});
  }

  


  ngOnInit(): void {
       this.loadAvailableUsers();
       this.loadFriendRequests();

  }




}

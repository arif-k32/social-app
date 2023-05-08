import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { environment } from 'src/environments/environment';
import { IPosts } from 'src/app/shared/interfaces/current-user/posts.interface';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {


 
  public curr_user!:any;
  public posts!:any;
  public postPhoto=false;


  constructor( private readonly friendsHttp:FriendsHttpService, private readonly postsHttp:PostsHttpService, private readonly proflieHttp:ProfileHttpService){
   
        
            
  }


  public togglePostPhoto():void{
    this.postPhoto=!this.postPhoto;
  }

  public createNewPost(fileToUpload:FormData):void{
      this.postsHttp.createNewPost(fileToUpload).subscribe((response:any)=>{
                                                            this.togglePostPhoto();
                                                        })

      
  }


  ngOnInit(): void {
            this.proflieHttp.getCurrentUser().subscribe((currUser:any)=>{
                      currUser.picture=environment.api+'/pictures/'+currUser.picture;
                      this.friendsHttp.getCurrentFriends().subscribe((friendList)=>{
                                  friendList=friendList.filter((obj:any, index:any, self:any) => index === self.findIndex((o:any) => o.username === obj.username));
                                  let allPosts:any[]=[]
                                  for(let friend of friendList){
                                      this.postsHttp.getPostsByUserName(friend.username).subscribe((response:any)=>{
                                                                                  for(let post of response){
                                                                                      post.first_name=friend.first_name;
                                                                                      post.last_name=friend.last_name;
                                                                                      post.post.picture=environment.api+'/pictures/'+post.post.picture;
                                                                                      post.profile_pic=environment.api+'/pictures/'+friend.picture;
                                                                                      post.curr_user=currUser;
                                                                                    }
                                                                                    allPosts= allPosts.concat(response)
                                                                                    allPosts.sort((a: IPosts, b: IPosts) => {   return new Date(b.post.created_at).getTime() - new Date(a.post.created_at).getTime();   });
                                                                                    this.posts=allPosts;

                                                                                  })
                                                                  }
                                                            })
                                        })
  }
  
  
}

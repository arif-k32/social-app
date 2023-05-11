import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { IPosts } from 'src/app/shared/interfaces/current-user/posts.interface';

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



  public getAllPosts(currUser:any, friendList:any):void{
    let allPosts:any[]=[]
    for(let friend of friendList){
        this.postsHttp.getPostsByUserName(friend.username).subscribe((posts:any)=>{
                                                    for(let post of posts){
                                                            post.author=friend;
                                                            post.curr_user=currUser;
                                                      }
                                                      allPosts= allPosts.concat(posts)
                                                      allPosts.sort((a: IPosts, b: IPosts) => {   return new Date(b.post.created_at).getTime() - new Date(a.post.created_at).getTime();   });
                                                      this.posts=allPosts;
                                                    })
                                    }

  }



  public getCurrentFriends(currUser:any):void{
    this.friendsHttp.getCurrentFriends().subscribe((friendList)=>{
                                              friendList=friendList.filter((obj:any, index:any, self:any) => index === self.findIndex((o:any) => o.username === obj.username));
                                              this.getAllPosts(currUser, friendList)      
                                          })

  }

  public getAllFriendsPosts():void{
    this.proflieHttp.getCurrentUser().subscribe((currUser:any)=>{
                                            this.getCurrentFriends(currUser);
                                       })
    
  }

  



  ngOnInit(): void {

            this.getAllFriendsPosts();
  }

 
  
  
}

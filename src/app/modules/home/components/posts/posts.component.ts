import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { environment } from 'src/environments/environment';
import { IPosts } from 'src/app/shared/interfaces/current-user/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {


 
  public curr_user!:any;
  public posts!:any;
  public postPhoto=false;


  constructor( private readonly profileHttp:ProfileHttpService, private readonly postsHttp:PostsHttpService){
        
            profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{
                                                this.curr_user=currUser;
                                                postsHttp.getPostsByUserName(currUser.username).subscribe((posts:any)=>{
                                                                  posts.sort((a: IPosts, b: IPosts) => {   return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();   });
                                                                  for(let post of posts){
                                                                      post.first_name=currUser.first_name;
                                                                      post.last_name=currUser.last_name;
                                                                      post.picture=environment.api+'/pictures/'+post.picture;
                                                                      post.profile_pic =environment.api+'/pictures/'+currUser.picture;
                                                                  }
                                                                  this.posts=posts;

                                                              })
                                              })
  }


  public togglePostPhoto():void{
    this.postPhoto=!this.postPhoto;
  }

  public createNewPost(fileToUpload:FormData):void{
      this.postsHttp.createNewPost(fileToUpload).subscribe((response:any)=>{
                                                            this.togglePostPhoto();
                                                        })

      
  }

  
  
}

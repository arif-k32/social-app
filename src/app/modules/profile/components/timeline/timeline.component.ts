import { Component } from '@angular/core';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { IPosts } from 'src/app/shared/interfaces/current-user/posts.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
    posts!:any;

    constructor(private readonly postsHttp:PostsHttpService, private readonly profileHttp:ProfileHttpService){


      profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{
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

}

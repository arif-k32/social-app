import { Component } from '@angular/core';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { IPosts } from 'src/app/shared/interfaces/current-user/posts.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent {
  posts!:any;
  constructor(private readonly profileHttp:ProfileHttpService, postsHttp:PostsHttpService){

        profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{
                    postsHttp.getPostsByUserName(currUser.username).subscribe((posts:IPosts[])=>{
                                            posts.sort((a:IPosts, b:IPosts)=> new Date(b.post.created_at).getTime() - new Date(a.post.created_at).getTime())
                                            for(let post of posts)
                                                post.post.picture=environment.api+"/pictures/"+post.post.picture;
                                            this.posts=posts;   
                    })
        })

  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private readonly profileHttp:ProfileHttpService,private readonly postsHttp:PostsHttpService, private readonly activatedRoute:ActivatedRoute){

        profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{
                    postsHttp.getPostsByUserName(currUser.username).subscribe((posts:IPosts[])=>{
                                            posts.sort((a:IPosts, b:IPosts)=> new Date(b.post.created_at).getTime() - new Date(a.post.created_at).getTime())
                                            for(let post of posts)
                                                // post.post.picture=environment.api+"/pictures/"+post.post.picture;
                                            this.posts=posts;   
                    })
        })

  }

  public getPostsByUserName(username:string):void{
    this.postsHttp.getPostsByUserName(username).subscribe((posts:IPosts[])=>{
                                                            posts.sort((a:IPosts, b:IPosts)=> new Date(b.post.created_at).getTime() - new Date(a.post.created_at).getTime())
                                                            for(let post of posts)
                                                                // post.post.picture=environment.api+"/pictures/"+post.post.picture;
                                                            this.posts=posts;   
                                                      })
  }

  public getCurrUser():void{
    this.profileHttp.getCurrentUser().subscribe((currUser)=>{ 
                                              this.getPostsByUserName(currUser.username);
                                            })
  }
  public getProfile(username:string):void{
      this.profileHttp.getProfile(username).subscribe((profile)=> {
                                                this.getPostsByUserName(username);
                                          });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:{[username:string]:string})=>{
            this.profileHttp.getCurrentUser().subscribe((currUser)=>{
                                                    if(params['username'] && (params['username'] != currUser.username)){
                                                        this.getProfile(params['username']);
                                                    }
                                                    else{
                                                      this.getCurrUser();
                                                    }
                                              })
                                            
                                      })
  }

}

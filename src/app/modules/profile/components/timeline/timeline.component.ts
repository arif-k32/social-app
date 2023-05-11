import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { IPosts } from 'src/app/shared/interfaces/current-user/posts.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent implements OnInit {
    posts!:any;

    constructor(private readonly postsHttp:PostsHttpService, private readonly profileHttp:ProfileHttpService, private readonly activatedRoute:ActivatedRoute,private readonly router:Router){ }

    public getAllPosts(user:any):void{
      this.profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{
              this.postsHttp.getPostsByUserName(user.username).subscribe((posts:any[])=>{
                          posts.sort((a: IPosts, b: IPosts) => {   return new Date(b.post.created_at).getTime() - new Date(a.post.created_at).getTime();   });
                          for(let post of posts){
                            post.author=user;
                            post.curr_user=currUser;
                          }
                          
                          this.posts=posts;
        })
})

    }

    public getCurrUser():void{
      this.profileHttp.getCurrentUser().subscribe((curr_user)=>{ 
                                               this.getAllPosts(curr_user)
                                              })
    }
    public getProfile(username:string):void{
      this.profileHttp.getProfile(username).subscribe((profile)=> {
                                                  this.getAllPosts(profile)
  
                                            });
    }

    public reRouteToTimeline(username:string):void{
      const queryParams={ username:username}
      
      this.router.navigate(['/timeline'], {queryParams:queryParams})

    }

    public check_QueryParams(currUser:any):void{
      this.activatedRoute.queryParams.subscribe((params:{[username:string]:string})=>{
                                          if(params['username'] && (params['username'] != currUser.username)){
                                              this.getProfile(params['username']);
                                          }
                                          else{
                                            this.getCurrUser();
                                          }
                                    })
    }
  
  
    public check_Params():void{
      this.activatedRoute.params.subscribe((param:{[username:string]:string})=>{
        this.profileHttp.getCurrentUser().subscribe((currUser)=>{
                                    if(param['username']){
                                          if(param['username']!= currUser.username ){
                                              this.reRouteToTimeline(param['username']);
                                              // this.getProfile(param['username']);
                                          }
                                          else
                                                this.reRouteToTimeline(currUser.username);
                                              // this.getCurrUser();
                                          
                                          
                                    }
                                    else{
                                         this.check_QueryParams(currUser) ;
  
                                    }
                                    
  
                                })
                    })
  
  
    }
  
    
  
    ngOnInit(): void {
      this.check_Params();
      
    }
    

}

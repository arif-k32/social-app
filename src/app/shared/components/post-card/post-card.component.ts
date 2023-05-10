import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentsHttpService } from 'src/app/core/http/api/comments/comments-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
 
})
export class PostCardComponent implements OnInit {

  @Input() post!:any;
  public commentSection=false;
  public commentForm :FormGroup = new FormGroup({
                                                    post_id:new FormControl('',Validators.required),
                                                    content:new FormControl('',Validators.required)
                                                  });
 


  constructor(private readonly commentsHttp:CommentsHttpService, private readonly router:Router){}

  public toggleCommentSection():void{
     this.commentSection=!this.commentSection;
  }
  public reRouteToProfile(username:string):void{
    this.router.navigate(['profile'],{queryParams:{username:username}});
  }


  public calculateCreationTime(created_at:string):string{
            const now = Date.now(); 
            const createdAt = new Date(created_at).getTime(); 
            const diffMs = now - createdAt; 
            let diff = 0;
            let unit = "";
            if (diffMs < 60000) { // less than 1 minute
              diff = Math.round(diffMs / 1000);
              if(diff == 1) unit = "second";
                      else unit = "seconds";

            } else if (diffMs < 3600000) { // less than 1 hour
              diff = Math.round(diffMs / 60000);
              if(diff == 1) unit = "minute";
                      else unit = "minutes";

            } else if (diffMs < 86400000) { // less than 1 day
              diff = Math.round(diffMs / 3600000);
              if(diff == 1) unit = "hour";
                      else unit = "hours";
                      
            } else { // more than 1 day
              diff = Math.round(diffMs / 86400000);
              if(diff == 1) unit = "day";
                      else unit = "days";
            }
          return `${diff} ${unit} ago.`
  }


  public commentOnPost():void{
    if(this.commentForm.valid)
        this.commentsHttp.commentOnPost(this.commentForm.value).subscribe((response)=>{
                                                                        this.commentForm.reset();
                                                                        const { first_name, last_name, username, content, picture, created_at } = response.comment.author;
                                                                        let comment = { first_name, last_name, username, content, picture, created_at };
                                                                        comment.content=response.comment.content;
                                                                        comment.created_at=response.comment.created_at;
                                                                        this.post.post.comments.push(comment);
                                                                        this.post.post.comments.sort((a:any, b: any) => {   return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();   });
                                                                        this.post.comments.push(comment);
                                                                        this.post.comments.sort((a:any, b: any) => {   return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();   });
                                                                });
  }



  ngOnInit(): void {
    this.post.comments.sort((a:any, b: any) => {   return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();   });
    this.post.post.comments.sort((a:any, b: any) => {   return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();   });
    this.commentForm.controls['post_id'].setValue(this.post.post.id);

    

  }


}

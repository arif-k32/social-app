import { Component, Input, OnInit } from '@angular/core';
import { CommentsHttpService } from 'src/app/core/http/api/comments/comments-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
 
})
export class PostCardComponent implements OnInit {

  @Input() post!:any;
  commentSection=true;
 


  constructor(private readonly commentsHttp:CommentsHttpService){}

  public toggleCommentSection():void{
     this.commentSection=!this.commentSection;
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


  public commentOnPost(comment:string, post_id:string):void{
      this.commentsHttp.commentOnPost(comment,post_id).subscribe((Response)=>console.log(Response));
  }



  ngOnInit(): void {
    for(let k of [1,2,3,4])
        for (let i of [1,2,3,4,5,6,7,8]){
          const comment = {
                              comment:`test ${i} comment laksdj fkjewij a;kenrwoieh rwemr; alkejf ioe jra;kj jra; kwejrm aw,enr awiuehuiawhf awjenalenf aknfeawoiueht a;wenta;wktn;a wrktja;iwojt a;weal;ekj test ${i} comment laksdj fkjewij a;kenrwoieh rwemr; alkejf ioe jra;kj jra; kwejrm aw,enr awiuehuiawhf awjenalenf aknfeawoiueht a;wenta;wktn;a wrktja;iwojt a;weal;ekj test ${i} comment laksdj fkjewij a;kenrwoieh rwemr; alkejf ioe jra;kj jra; kwejrm aw,enr awiuehuiawhf awjenalenf aknfeawoiueht a;wenta;wktn;a wrktja;iwojt a;weal;ekj test ${i} comment laksdj fkjewij a;kenrwoieh rwemr; alkejf ioe jra;kj jra; kwejrm aw,enr awiuehuiawhf awjenalenf aknfeawoiueht a;wenta;wktn;a wrktja;iwojt a;weal;ekj`,
                              first_name:'name',
                              last_name:'name',
                              profile_pic:'https://www.dpforwhatsapp.in/img/dpfotwhatsapp/12.webp'
                          }
          this.post.post.comments.push(comment);
        }

  }


}

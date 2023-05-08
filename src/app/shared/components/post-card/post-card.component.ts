import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
 
})
export class PostCardComponent {

  @Input() post!:any;


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



}

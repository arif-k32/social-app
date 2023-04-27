import { Component } from '@angular/core';
import { DataSupplyService } from '../shared/services/data-supply.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  name='John';
  dat!:any;
  constructor(private readonly data:DataSupplyService){this.dat=data.users;}
  ngOnInit(){
    console.log(this.dat[1].posts[1].post_time)
    const post = new Date(this.dat[1].posts[0])
    const now = new Date ();
    const diff = post.getTime() - now.getTime();
    console.log(now)

  }
  
}

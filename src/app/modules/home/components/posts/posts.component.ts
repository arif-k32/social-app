import { Component } from '@angular/core';
import { DataSupplyService } from '../../../../shared/services/data-supply.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  name='John';
  public postPhoto=false;
  constructor(private readonly data:DataSupplyService){this.dat=data.users}
  dat!:any;

  public togglePostPhoto():void{
    this.postPhoto=!this.postPhoto;
  }

}

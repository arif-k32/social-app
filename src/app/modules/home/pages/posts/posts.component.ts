import { Component } from '@angular/core';
import { DataSupplyService } from '../../../../shared/services/data-supply.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  name='John';
  constructor(private readonly data:DataSupplyService){this.dat=data.users}
  dat!:any;
}

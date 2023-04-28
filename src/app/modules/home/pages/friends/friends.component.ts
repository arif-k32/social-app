import { Component } from '@angular/core';
import { DataSupplyService } from '../../../../shared/services/data-supply.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  name='John';
  dat!:any;
  constructor(private readonly data:DataSupplyService){this.dat=data.users;}
  
  
}

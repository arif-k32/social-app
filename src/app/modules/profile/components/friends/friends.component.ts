import { Component } from '@angular/core';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends.component.html',
})
export class FriendsComponent {

  name='John';
  dat!:any;
  constructor(private readonly data:DataSupplyService){this.dat=data.users;}

}

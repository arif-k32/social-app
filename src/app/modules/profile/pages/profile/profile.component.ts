import { Component } from '@angular/core';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  curr_user!:any;
  constructor(private readonly data:DataSupplyService){ this.curr_user=data.users[3]}

}

import { Component } from '@angular/core';
import { DataSupplyService } from 'src/app/shared/services/data-supply.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
})
export class SuggestionsComponent {
  users!:any;
  constructor(private readonly data:DataSupplyService){ this.users=data.users}


}

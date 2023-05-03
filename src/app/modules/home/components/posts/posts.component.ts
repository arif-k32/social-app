import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { DataSupplyService } from '../../../../shared/services/data-supply.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  name='John';
  public postPhoto=false;
  constructor(private readonly data:DataSupplyService, private readonly profileHttp:ProfileHttpService){this.dat=data.users}
  dat!:any;

  public togglePostPhoto():void{
    this.postPhoto=!this.postPhoto;
  }

  ngOnInit(){
    this.profileHttp.getProfile('arifk').subscribe((respone)=>{
      console.log(respone)

    })
    // this.profileHttp.updateProfile({first_name:'arif',last_name:"k",username:"arifk",about:"Hello World"}).subscribe((response)=>{console.log(response)})
  }
  
}

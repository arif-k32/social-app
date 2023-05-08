import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  updateProfileForm:FormGroup= new FormGroup({
    first_name:new FormControl('',Validators.required),
    first_name_edit:new FormControl(false),
    last_name: new FormControl('',Validators.required),
    last_name_edit:new FormControl(false),
    username:new FormControl("",Validators.required),
    username_edit:new FormControl(false),
    about:new FormControl('',Validators.required),
    about_edit:new FormControl(false),
    email:new FormControl(''),
    birthday:new FormControl(''),
  });



curr_user!:ICurr_user;


constructor(private readonly profileHttp:ProfileHttpService, private readonly notify:NotifyService){
profileHttp.getCurrentUser().subscribe((currUser:ICurr_user)=>{
this.curr_user=currUser;
this.updateProfileForm.patchValue(currUser)
})

}



public toggleEdit(property:string):void{
const property_edit= property+'_edit';
this.updateProfileForm.controls[property_edit].setValue(!this.updateProfileForm.controls[property_edit].value)
}

public saveEdits(property:string):void{
this.profileHttp.updateProfile(this.updateProfileForm.value).subscribe((response)=>{  
                                  if(response == 'Updated'){
                                    this.toggleEdit(property);
                                    const updated_user= this.updateProfileForm.value;
                                    updated_user.picture=environment.api+'/pictures/'+this.curr_user.picture;
                                    this.notify.notifyParent(updated_user);

                                  }
                                      
                      })

}

public getEditStatus(property:string):boolean{
const property_edit = property+'_edit';
return this.updateProfileForm.controls[property_edit].value;
}
public getProfileDetails(property:string):string{
return this.updateProfileForm.controls[property].value;
}


}

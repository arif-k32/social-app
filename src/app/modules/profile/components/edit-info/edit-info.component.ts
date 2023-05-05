import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
})
export class EditInfoComponent {

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
  
  

  test='arifk';


  constructor(private readonly profileHttp:ProfileHttpService){
    profileHttp.getProfile(this.test).subscribe((response)=>{
                                           
                                                this.updateProfileForm.patchValue(response);
                                        })
  }



  public toggleEdit(property:string):void{
    const property_edit= property+'_edit';
    this.updateProfileForm.controls[property_edit].setValue(!this.updateProfileForm.controls[property_edit].value)
  }

  public saveEdits(property:string):void{
    this.profileHttp.updateProfile(this.updateProfileForm.value).subscribe((response)=>{  
                                                                              if(response == 'Updated')
                                                                                  this.toggleEdit(property);
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

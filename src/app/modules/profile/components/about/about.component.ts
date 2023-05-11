import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { ICurr_user } from 'src/app/shared/interfaces/current-user/current-user.interface';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

      public updateProfileForm:FormGroup= new FormGroup({
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



    public user_profile!:any;
    public editMode=false;


    constructor(private readonly profileHttp:ProfileHttpService, private readonly notify:NotifyService,private readonly activatedRoute:ActivatedRoute){}

    public toggleEditMode():void{
      this.editMode=!this.editMode;
    }



    public toggleEdit(property:string):void{
       const property_edit= property+'_edit';
        this.updateProfileForm.controls[property_edit].setValue(!this.updateProfileForm.controls[property_edit].value)
    }

    public saveEdits(property:string):void{
          this.profileHttp.updateProfile(this.updateProfileForm.value).subscribe((response)=>{
                                            console.log(response)  
                                            // if(response == 'Updated'){
                                              this.toggleEdit(property);
                                              const updated_user= this.updateProfileForm.value;
                                              updated_user.picture=environment.api+'/pictures/'+this.user_profile.picture;
                                              this.notify.notifyParent(updated_user);

                                            // }
                                                
                                })

    }

    public getEditStatus(property:string):boolean{
        const property_edit = property+'_edit';
        return this.updateProfileForm.controls[property_edit].value;
    }
    public getProfileDetails(property:string):string{
          return this.updateProfileForm.controls[property].value;
    }


    public getCurrUser():void{
      this.profileHttp.getCurrentUser().subscribe((response)=>{ 
                                                this.updateProfileForm.patchValue(response)
                                                this.user_profile=response;
                                                this.toggleEditMode();
                                              })
    }
    public getProfile(username:string):void{
      this.profileHttp.getProfile(username).subscribe((profile)=> {
                                                  this.updateProfileForm.patchValue(profile)
                                                  this.user_profile=profile ;
  
                                            });
    }

    ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((params:{[username:string]:string})=>{
              this.profileHttp.getCurrentUser().subscribe((currUser)=>{
                                                      if(params['username'] && (params['username'] != currUser.username)){
                                                          this.getProfile(params['username']);
                                                      }
                                                      else{
                                                        this.getCurrUser();
                                                      }
                                                })
                                              
                                        })
    }
    


}

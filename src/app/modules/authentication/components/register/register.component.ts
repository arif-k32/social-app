import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterHttpService } from 'src/app/core/http/api/register/register-http.service';
import { ResponseService } from 'src/app/shared/services/response.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

    public registerForm:FormGroup = new FormGroup ({
                                                      first_name: new FormControl ('',Validators.required),
                                                      surname: new FormControl('',Validators.required),
                                                      email: new FormControl('',[Validators.required, Validators.email]),
                                                      password: new FormControl('',Validators.required),
                                                      dob: new FormControl(''),
                                                      gender: new FormControl('',Validators.required),
                                                    })

    constructor(private readonly router:Router, private readonly response:ResponseService, private readonly registerHttp:RegisterHttpService){}


    public closeCreateAccount():void{
      this.response.onCloseCreateAccount('close');
    }

    public register():void{
      this.registerHttp.registerUser(this.registerForm.value).subscribe((response:any)=>{
                                                                      if(response== 'success')
                                                                      {
                                                                        console.log('registration successful')
                                                                        this.closeCreateAccount();
                                                                      }
                                                                })
    }
    public getEmailValidators():boolean{
      return (  this.registerForm.controls['email'].errors?.['email'] || this.registerForm.controls['email'].errors?.['required']) && this.registerForm.controls['email'].touched
    
    }
    
}


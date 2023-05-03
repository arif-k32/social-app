import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterHttpService } from 'src/app/core/http/api/register/register-http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

    @Output ()  close:EventEmitter<null> = new EventEmitter<null>();

    public registerForm:FormGroup = new FormGroup ({
                                                      first_name: new FormControl ('',Validators.required),
                                                      last_name: new FormControl('',Validators.required),
                                                      email: new FormControl('',[Validators.required, Validators.email]),
                                                      password: new FormControl('',Validators.required),
                                                      birthday: new FormControl(''),
                                                      gender: new FormControl('',Validators.required),
                                                      username:new FormControl('',Validators.required)
                                                    })

    constructor(private readonly router:Router,  private readonly registerHttp:RegisterHttpService){}


    public closeCreateAccount():void{
        this.close.emit();
    }

    public register():void{
      if(this.registerForm.valid)
          this.registerHttp.registerUser(this.registerForm.value).subscribe((response:any)=>{
                                                                          this.close.emit();
                                                                    })
    }
    public getEmailValidators():boolean{
      return (  this.registerForm.controls['email'].errors?.['email'] || this.registerForm.controls['email'].errors?.['required']) && this.registerForm.controls['email'].touched
    
    }
    
}


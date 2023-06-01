import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginHttpService } from 'src/app/core/http/api/login/login-http.service';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public createAccount:boolean=false;
  public loginForm:FormGroup = new FormGroup({
                                                  email :new FormControl ('arif@email.com',[Validators.required,Validators.email]),
                                                  password: new FormControl('2356',Validators.required)
                                              })

  public darkMode:boolean = false;

  constructor(private readonly router:Router, private readonly loginHttp:LoginHttpService,private readonly darkModeService:DarkModeService){
      this.darkMode=darkModeService.initializeDarkMode();
  }
  public toggleDarkMode():void{
    this.darkMode=!this.darkMode;
    this.darkModeService.onDarkModeChange(this.darkMode)
    localStorage.setItem('darkMode',this.darkMode.toString());
  }

  
  public toggleCreateAccount():void{
      this.createAccount=!this.createAccount;
  }
  public login():void{
    this.loginHttp.login(this.loginForm.value).subscribe((response:any)=>{
                                                            localStorage.setItem('access_token',JSON.stringify(response.access_token))
                                                            this.router.navigate(['']);
                                                    });
  }
  public getEmailValidators():boolean{
    return (  this.loginForm.controls['email'].errors?.['email'] || this.loginForm.controls['email'].errors?.['required']) && this.loginForm.controls['email'].touched
  
  }

 

  
}

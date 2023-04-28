import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginHttpService } from 'src/app/core/http/api/login/login-http.service';
import { ResponseService } from 'src/app/shared/services/response.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public createAccount:boolean=false;
  public loginForm:FormGroup = new FormGroup({
                                                  email :new FormControl ('john@gmail.com',[Validators.required,Validators.email]),
                                                  password: new FormControl('asdf',Validators.required)
                                              })

  constructor(private readonly router:Router, private readonly response:ResponseService,private readonly loginHttp:LoginHttpService){}

  
  closeCreateAccountResponse:Subscription=this.response.getCloseCreateAccount().subscribe((response:string)=>{
                                                                                        if(response=='close')
                                                                                          this.toggleCreateAccount();
                                                                                  });

  
  public toggleCreateAccount():void{
      this.createAccount=!this.createAccount;
  }
  public login():void{
    this.loginHttp.login(this.loginForm.value).subscribe((response:any)=>{
                                                          if(response == 'success'){
                                                            console.log('login success');
                                                            localStorage.setItem('access_token','true')
                                                            this.router.navigate(['']);
                                                          }

                                                    });
  }

  
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginHttpService } from 'src/app/core/http/api/login/login-http.service';
import { RegisterHttpService } from 'src/app/core/http/api/register/register-http.service';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[LoginHttpService, RegisterHttpService]

})
export class AuthenticationModule { }

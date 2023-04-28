import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginHttpService } from 'src/app/core/http/api/login/login-http.service';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterHttpService } from 'src/app/core/http/api/register/register-http.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[LoginHttpService, RegisterHttpService]

})
export class AuthenticationModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationHttpService } from 'src/app/core/http/api/authentication/authentication-http.service';
import { HomeRoutingModule } from './home-routing.module';
import { FriendsComponent } from './pages/friends/friends.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeGuard } from 'src/app/core/authentication/guards/home.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  
    HomeComponent,
    FriendsComponent,
    PostsComponent,
    NavigationComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers:[AuthenticationHttpService,HomeGuard]
})
export class HomeModule { }

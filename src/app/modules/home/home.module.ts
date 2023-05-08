import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationHttpService } from 'src/app/core/http/api/authentication/authentication-http.service';
import { FriendsComponent } from './components/friends/friends.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';
import { NotificationsComponent } from './components/notifications/notifications.component';


@NgModule({
  declarations: [
  
    HomeComponent,
    FriendsComponent,
    PostsComponent,
    NavigationComponent,
    NotificationsComponent,
  
   
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule

  ],
  providers:[AuthenticationHttpService, PostsHttpService, ProfileHttpService]
})
export class HomeModule { }

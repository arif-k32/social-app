import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationHttpService } from 'src/app/core/http/api/authentication/authentication-http.service';
import { FriendsComponent } from './components/friends/friends.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostPhotoComponent } from './components/post-photo/post-photo.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsHttpService } from 'src/app/core/http/api/home/posts-http.service';


@NgModule({
  declarations: [
  
    HomeComponent,
    FriendsComponent,
    PostsComponent,
    NavigationComponent,
    PostPhotoComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule

  ],
  providers:[AuthenticationHttpService, PostsHttpService]
})
export class HomeModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationHttpService } from 'src/app/core/http/api/authentication/authentication-http.service';
import { HomeRoutingModule } from './home-routing.module';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostPhotoComponent } from './components/post-photo/post-photo.component';


@NgModule({
  declarations: [
  
    HomeComponent,
    FriendsComponent,
    PostsComponent,
    NavigationComponent,
    PostPhotoComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers:[AuthenticationHttpService]
})
export class HomeModule { }

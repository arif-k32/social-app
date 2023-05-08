import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AuthenticationHttpService } from 'src/app/core/http/api/authentication/authentication-http.service';
import { CommentsHttpService } from 'src/app/core/http/api/comments/comments-http.service';
import { FriendsHttpService } from 'src/app/core/http/api/friends/friends-http.service';
import { PostsHttpService } from 'src/app/core/http/api/posts/posts-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';


@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    FriendsComponent,
    SettingsComponent,
    SuggestionsComponent,
    TimelineComponent,
   

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[AuthenticationHttpService, PostsHttpService, ProfileHttpService, FriendsHttpService, CommentsHttpService]
})
export class ProfileModule { }

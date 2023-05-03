import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    FriendsComponent,
    SettingsComponent,
    SuggestionsComponent

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

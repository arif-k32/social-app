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
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    FriendsComponent,
    SettingsComponent,
    SuggestionsComponent,
    EditInfoComponent,
    TimelineComponent,
   

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }

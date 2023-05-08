import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HomeGuard } from 'src/app/core/authentication/guards/home.guard';

const routes: Routes = [
                          {
                            path:'',
                            component:ProfileComponent,
                            canActivate:[HomeGuard],
                            canActivateChild:[HomeGuard],
                            children:[
                                        {
                                          path:'',
                                          redirectTo:'timeline',
                                          pathMatch:'full'
                                        },
                                        {
                                          path:'timeline',
                                          component:TimelineComponent
                                        },
                                        {
                                          path:'photos',
                                          component:PhotosComponent
                                        },
                                        {
                                          path:'friends',
                                          component:FriendsComponent
                                        },
                                        {
                                          path:'about' ,
                                          component:AboutComponent
                                        },
                                        
                                      ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

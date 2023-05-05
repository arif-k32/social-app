import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PhotosComponent } from './components/photos/photos.component';
import { EditInfoComponent } from './components/edit-info/edit-info.component';

const routes: Routes = [
                          {
                            path:'',
                            component:ProfileComponent,
                            children:[
                                        {
                                          path:'',
                                          redirectTo:'photos',
                                          pathMatch:'full'
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
                                        {
                                          path:'edit-info',
                                          component:EditInfoComponent
                                        }
                                      ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

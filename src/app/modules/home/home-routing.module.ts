import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeGuard } from 'src/app/core/authentication/guards/home.guard';
import { PostsComponent } from './components/posts/posts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AddNewFriendsComponent } from './components/add-new-friends/add-new-friends.component';

const routes: Routes = [
                          {
                            path:'',
                            component:HomeComponent,
                            canActivate:[HomeGuard],
                            canActivateChild:[HomeGuard],
                            children:[
                                        {
                                          path:'',
                                          component:PostsComponent
                                        },
                                        {
                                          path:'posts',
                                          component:PostsComponent
                                        },
                                        {
                                          path:'notifications',
                                          component:NotificationsComponent
                                        },
                                        {
                                          path:'explore',
                                          component:ExploreComponent
                                        },
                                        {
                                          path:'add-new-friends',
                                          component:AddNewFriendsComponent
                                        }
                                      ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[HomeGuard]
})
export class HomeRoutingModule { }

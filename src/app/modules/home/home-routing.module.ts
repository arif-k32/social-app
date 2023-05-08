import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeGuard } from 'src/app/core/authentication/guards/home.guard';
import { PostsComponent } from './components/posts/posts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
                          {
                            path:'',
                            component:HomeComponent,
                            canActivate:[HomeGuard],
                            children:[
                                        {
                                          path:'',
                                          redirectTo:'posts',
                                          pathMatch:'full'
                                        },
                                        {
                                          path:'posts',
                                          component:PostsComponent
                                        },
                                        {
                                          path:'notifications',
                                          component:NotificationsComponent
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

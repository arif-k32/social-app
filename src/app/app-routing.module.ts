import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
                          {
                            path:'',
                            loadChildren:()=>import('./modules/home/home.module').then((m)=>m.HomeModule)
                          },
                          {
                            path:'home',
                            loadChildren:()=>import('./modules/home/home.module').then((m)=>m.HomeModule)
                          },
                          {
                            path:'',
                            loadChildren:()=>import('./modules/profile/profile.module').then((m)=>m.ProfileModule)
                          },
                          {
                            path:'profile',
                            loadChildren:()=>import('./modules/profile/profile.module').then((m)=>m.ProfileModule)
                          },
                          {
                            path:'login',
                            loadChildren:()=>import('./modules/authentication/authentication.module').then((m)=>m.AuthenticationModule)
                          },
                          {
                            path:':username',
                            loadChildren:()=>import('./modules/profile/profile.module').then((m)=>m.ProfileModule)
                          }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

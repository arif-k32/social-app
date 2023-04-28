import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeGuard } from 'src/app/core/authentication/guards/home.guard';

const routes: Routes = [
                          {
                            path:'',
                            component:HomeComponent,
                            canActivate:[HomeGuard]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[HomeGuard]
})
export class HomeRoutingModule { }

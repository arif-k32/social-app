import { Component, effect } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media';
  public darkMode!:boolean;
  constructor(private readonly darkModeService:DarkModeService){ 
    effect(()=>{ this.darkMode = darkModeService.darkMode() ;
                  console.log(this.darkMode)})
   }
}

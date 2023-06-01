import { Component } from '@angular/core';
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
  public darkMode$:Observable<boolean>=this.darkModeService.watchDarkMode();
  constructor(private readonly darkModeService:DarkModeService){  }
}

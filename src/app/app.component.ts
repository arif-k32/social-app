import { Component } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media';
  public darkMode:boolean = false;
  constructor(private readonly darkModeService:DarkModeService){
    this.darkMode=darkModeService.initializeDarkMode();
  }
  public watchDarkModeSubscription:Subscription = this.darkModeService.watchDarkMode()
                                                      .subscribe( (response:boolean) => this.darkMode=response  );
}

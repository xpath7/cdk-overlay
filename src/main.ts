import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';
import { FilterPipe } from './filter.pipe';
import { PlayerComponent } from './player/player.component';
import { players } from './players';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayerComponent, FilterPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [NO_ERRORS_SCHEMA]
})
export class App {
  protected players = players;
  protected searchText = '';
}

bootstrapApplication(App,{
  providers: [
    provideAnimations()
  ]
});

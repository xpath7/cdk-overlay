import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Player } from '../../players';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PlayerDetailsComponent {
  @Input({required: true}) player!: Player;
}
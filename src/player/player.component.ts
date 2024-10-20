import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { Player } from '../players';
import { enterLeaveAnimation } from './animations';
import { PlayerDetailsComponent } from './player-details/player-details.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [
    enterLeaveAnimation
  ],
  imports: [NgOptimizedImage, CommonModule, OverlayModule, PlayerDetailsComponent, PortalModule],
  standalone: true
})
export class PlayerComponent {
  @Input({required: true}) player!: Player;
  @HostBinding('@enterLeaveAnimation') animate = true;
  @ViewChild(CdkPortal) portal!: CdkPortal;
  protected detailsOpen = false;

  constructor(private overlay: Overlay) {}

  // 1. Simple Globally Positioned Overlay
  protected openModal() {
    const overlayRef = this.overlay.create();
    overlayRef.attach(this.portal);
  }

  // 2. Basic Custom Configuration
  // protected openModal() {
  //   const config = new OverlayConfig({
  //     positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
  //     width: '60%',
  //     hasBackdrop: true
  //   });

  //   const overlayRef = this.overlay.create(config);
  //   overlayRef.attach(this.portal);
  //   overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  // }
}

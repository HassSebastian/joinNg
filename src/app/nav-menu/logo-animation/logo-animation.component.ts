import { Component } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-logo-animation',
  templateUrl: './logo-animation.component.html',
  styleUrls: ['./logo-animation.component.scss'],
})
export class LogoAnimationComponent {
  constructor(public systemService: SystemService) {}

  selectedLogo: boolean = false;
  logoutSelect() {
    this.selectedLogo = !this.selectedLogo;
  }
}

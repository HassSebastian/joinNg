import { Component } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private sysService: SystemService) {}
  menuNr: number = 0;
  selected(x: number) {
    this.sysService.selectedButtonIndex = x;
    this.menuNr = x;
  }
}

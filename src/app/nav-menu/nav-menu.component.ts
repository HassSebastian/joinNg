import { Component } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  constructor(public systemService: SystemService) {}
}

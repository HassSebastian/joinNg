import { Component } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public systemService: SystemService) {}
}

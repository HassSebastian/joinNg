import { Component } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss'],
})
export class ContentAreaComponent {
  constructor(public sysService: SystemService) {}
}

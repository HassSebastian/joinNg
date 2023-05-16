import { Component } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(public sysService: SystemService) {}
}

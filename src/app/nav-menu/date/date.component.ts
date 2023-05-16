import { Component } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  constructor(public sysService: SystemService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.sysService.todayDate = new Date();
    }, 1000);
  }
}

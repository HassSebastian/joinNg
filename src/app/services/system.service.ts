import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  loginStatus: boolean = true;
  selectedButtonIndex: number = 0;
  todayDate: any;

  constructor() {}
  ngOnInit(): void {
    setInterval(() => {
      this.todayDate = new Date();
    }, 1000);
  }
}

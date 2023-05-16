import { Component } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public systemService: SystemService) {}
  login() {
    this.systemService.loginStatus = true;
  }
}

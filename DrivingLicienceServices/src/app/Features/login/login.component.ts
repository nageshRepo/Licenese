import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthnticationService } from '../authntication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login = {
    userMail: '',
    userPassword: ''
  }

  constructor(private router: Router, private auth: AuthnticationService) {

  }

  onLogin() {
    this.auth.isUserLoggedIn.next(true);
    this.router.navigate(['apply']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthnticationService } from './Features/authntication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DrivingLicienseServices';
  showNavbar = false;
  constructor(private auth: AuthnticationService, private route: Router) {

  }

  ngOnInit() {
    this.auth.isUserLoggedIn.subscribe((data: boolean) => {
      if (!data) {
        this.showNavbar = data;
        this.route.navigate(['/login']);
      } else {
        this.showNavbar = data;
      }
      console.log(this.showNavbar);
    });

  }

}

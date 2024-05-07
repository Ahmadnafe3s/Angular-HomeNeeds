import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  toastLoad = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.autoLogin();

    AOS.init({
      once: true,
      duration: 1000,
      offset: 200,
      delay: 100
    });

    // to fix apperance of toast notification uneccessary on reaload page..
    this.toastLoad = true;
  }

}



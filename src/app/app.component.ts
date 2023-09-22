import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homeneeds';
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}

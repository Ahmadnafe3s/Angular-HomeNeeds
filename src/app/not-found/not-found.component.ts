import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(private router: Router) { }
  navigateToHome(): void {
    this.router.navigate(['/']); // Navigate to home page
}
}

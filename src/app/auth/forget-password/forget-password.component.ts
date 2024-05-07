import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  isLoading = false;
  constructor(private authService: AuthService, private toast: NgToastService, private router: Router) { }
  onSubmit(f: NgForm) {
    this.isLoading = true;
    this.authService.resetPassword(f.value.email).subscribe(res => {
      this.toast.info({ detail: "Info", summary: 'Email has been sent.', duration: 3000, position: 'topCenter' })
      this.isLoading = false
      this.router.navigate(['auth'])
    },
      err => {
        this.toast.error({ detail: "Error", summary: err, duration: 3000, position: 'topCenter' })
        this.isLoading = false
      }
    )
  }
}

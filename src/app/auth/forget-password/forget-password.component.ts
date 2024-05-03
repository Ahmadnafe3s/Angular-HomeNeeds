import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastService } from 'src/app/Shared/Toast/Toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  isLoading = false;
  constructor(private authService: AuthService, private toastService: ToastService, private router: Router) { }
  onSubmit(f: NgForm) {
    this.isLoading = true;
    this.authService.resetPassword(f.value.email).subscribe(res => {
      this.toastService.Toast.next({ type: 'success', message: 'Email Sent.', duration: 3000 })
      this.isLoading = false
      this.router.navigate(['auth'])
    },
      err => {
        this.toastService.Toast.next({ type: 'error', message: err, duration: 3000 })
        this.isLoading = false
      }
    )
  }
}

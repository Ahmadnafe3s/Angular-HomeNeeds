import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService, authResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../Shared/Toast/Toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogging = true;
  authForm: FormGroup;
  isLoading = false;
  errMessage = null;

  constructor(private authService: AuthService, private route: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.authFormControl();
  }

  private authFormControl() {
    const email = '';
    const password = '';

    this.authForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    })
  }

  loginMode() {
    this.isLogging = !this.isLogging;
  }

  onSubmit() {
    this.isLoading = true;
    this.errMessage = null;
    const email = this.authForm.value.email
    const password = this.authForm.value.password
    let observ: Observable<authResponseData>;

    if (this.isLogging) {
      observ = this.authService.logIn(email, password)
    } else {
      observ = this.authService.SignUp(email, password)
    }

    observ.subscribe(
      () => {
        this.isLoading = false;
        this.toastService.Toast.next({ type: 'success', message: 'Successfully Login', duration: 3000 })
        this.route.navigate(['/recipeList']);
        this.authForm.reset()
      },
      err => {
        this.isLoading = false;
        this.toastService.Toast.next({ type: 'error', message: err, duration: 3000 })
      }
    )
  }

}

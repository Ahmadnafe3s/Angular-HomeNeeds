import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService, authResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogging = true;
  authForm: FormGroup;
  isLoading = false;
  responseMsg = null;
  constructor(private authService: AuthService, private route: Router) { }

  private authFormControl() {
    const email = '';
    const password = '';

    this.authForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    })
  }

  ngOnInit(): void {
    this.authFormControl();
  }

  onSubmit() {
    this.isLoading = true;
    this.responseMsg = null;
    const email = this.authForm.value.email
    const password = this.authForm.value.password
    let observ: Observable<authResponseData>;

    if (this.isLogging) {
      observ = this.authService.logIn(email, password)
    } else {
      observ = this.authService.SignUp(email, password)
    }

    observ.subscribe(
      res => {
        console.log(res);
        this.isLoading = false;
        this.route.navigate(['/recipe']);
      },
      err => {
        this.isLoading = false;
        this.responseMsg = err;
      }
    )

    this.authForm.reset()
  }

  loginMode() {
    this.isLogging = !this.isLogging;
  }

  onHandleError() {
    this.responseMsg = null;
  }
}

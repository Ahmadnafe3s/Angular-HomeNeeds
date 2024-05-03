import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../Shared/shared.module";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthRouterModule } from "./auth-router.module";

@NgModule({
    declarations: [
        AuthComponent,
        ForgetPasswordComponent
    ],
    imports: [ReactiveFormsModule, SharedModule, AuthRouterModule , FormsModule]
})
export class AuthModule { }
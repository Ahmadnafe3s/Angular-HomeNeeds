import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'forget-password', component: ForgetPasswordComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRouterModule { }
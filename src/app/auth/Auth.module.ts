import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../Shared/shared.module";

@NgModule({
    declarations:[
        AuthComponent
    ],
    imports:[ReactiveFormsModule ,SharedModule, RouterModule.forChild([
        {path: '' , component : AuthComponent}
    ])]
})
export class AuthModule{}
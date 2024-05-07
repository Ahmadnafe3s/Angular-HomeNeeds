import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";
import { ConfirmComponent } from "./alert-dialog/confirm.component";
import { NgToastModule } from "ng-angular-popup";


@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        ConfirmComponent

    ],
    imports: [CommonModule , NgToastModule],
    exports: [
        LoadingSpinnerComponent,
        CommonModule,
        ConfirmComponent,
        NgToastModule
    ]
})


export class SharedModule { }
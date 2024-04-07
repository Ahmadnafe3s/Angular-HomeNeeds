import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";
import { ConfirmComponent } from "./alert-dialog/confirm.component";
@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        ConfirmComponent

    ],
    imports: [CommonModule],
    exports: [
        LoadingSpinnerComponent,
        CommonModule,
        ConfirmComponent,

    ]
})
export class SharedModule { }
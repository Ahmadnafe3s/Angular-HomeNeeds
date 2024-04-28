import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";
import { ConfirmComponent } from "./alert-dialog/confirm.component";
import { ToastComponent } from "./Toast/toast.component";
@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        ConfirmComponent,
        ToastComponent

    ],
    imports: [CommonModule],
    exports: [
        LoadingSpinnerComponent,
        CommonModule,
        ConfirmComponent,
        ToastComponent
    ]
})
export class SharedModule { }
import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { CommonModule } from "@angular/common";
import { ConfirmComponent } from "./confirm/confirm.component";
@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent,
        ConfirmComponent
        
    ],
    imports: [CommonModule],
    exports: [
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule,
        ConfirmComponent,

    ]
})
export class SharedModule { }
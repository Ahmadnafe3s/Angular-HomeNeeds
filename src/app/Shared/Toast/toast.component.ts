import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { ToastService } from "./Toast.service";

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['toast.component.css']
})

export class ToastComponent {
    @ViewChild('toast') toast: ElementRef;
    @ViewChild('img') img: ElementRef;

    errMessage: String = null;
    icon: String;

    constructor(private toastService: ToastService, private renderer: Renderer2) {
        
        toastService.Toast.subscribe(data => {
            let toastBG;
            let imgBG;

            if (data.type === 'success') {
                toastBG = '#078e00b7'
                imgBG = 'green'
                this.icon = `<i class='bx bx-badge-check'></i>`
            }
            else {
                toastBG = '#fd5050b7'
                imgBG = '#ff0000'
                this.icon = `<i id="alert-icon" class='bx bx-error'></i>`
            }


            this.renderer.setStyle(this.toast.nativeElement, 'background', toastBG)
            this.renderer.setStyle(this.img.nativeElement, 'background', imgBG)
            this.errMessage = data.message;
            setTimeout(() => {
                this.errMessage = null
            }, data.duration);
        })
    }

}
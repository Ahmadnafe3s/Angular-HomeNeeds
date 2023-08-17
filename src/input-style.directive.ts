import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector : '[inputStyle]'
})

export class AppInputStyle{
@HostBinding('class.inputStyle') Applied = false;

@HostListener('focusin') onFocusin(){
this.Applied = true;
}

@HostListener('focusout') onFocusout(){
this.Applied = false;
}
}
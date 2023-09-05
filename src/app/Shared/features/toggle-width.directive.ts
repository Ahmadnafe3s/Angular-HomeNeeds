import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appToggleWidth]'
})
export class ToggleWidthDirective {

  @HostBinding('class.addWidth') addWidth:boolean = false; // False will Not be Host

  @HostListener('click') Onclick(){
    this.addWidth = !this.addWidth;
  }

}

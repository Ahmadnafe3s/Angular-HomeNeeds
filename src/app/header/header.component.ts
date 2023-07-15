import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() Display = new EventEmitter<string>();

  onSelect(feature:string){
    this.Display.emit(
     feature
    )
  }
  
 
}
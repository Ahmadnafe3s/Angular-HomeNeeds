import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();
  @Output() ok = new EventEmitter<void>();
  
  onClose(): void {
    this.close.emit()
  }

  onOk(){
    this.ok.emit()
  }

}

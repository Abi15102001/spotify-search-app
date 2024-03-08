import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

@Output()
navigateEvent =new EventEmitter<void>();

back(){
  this.navigateEvent.emit();
}

}




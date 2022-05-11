import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 
  @Input()  productObj:any = {};
  @Output() onProductRemoved = new EventEmitter<number>();

 public remove(pid: number)
 {
 // event emitting
   this.onProductRemoved.emit(pid);
 }
}

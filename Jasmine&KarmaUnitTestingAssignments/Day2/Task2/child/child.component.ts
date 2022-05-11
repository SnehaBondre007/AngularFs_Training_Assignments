import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 
  @Input()  empObj:any = {};
  @Output() onEmpRemoved = new EventEmitter<number>();

 public remove(empno: number)
 {
 // event emitting
   this.onEmpRemoved.emit(empno);
 }
}

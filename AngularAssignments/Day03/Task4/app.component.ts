import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLoc:string = "";
  updateLocation(loc:string)
  {
    this.selectedLoc = loc;
  }

  selectedOption:string = "";

  sortName(empName:string){
    this.selectedOption = empName;
  }
  
}
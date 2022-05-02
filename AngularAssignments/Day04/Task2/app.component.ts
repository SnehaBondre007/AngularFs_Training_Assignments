import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sortOption:string  = "ename";

  updateName(ename:string)
  {
    this.sortOption = ename;
  }
  
}
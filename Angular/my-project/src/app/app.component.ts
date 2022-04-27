import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  public uname:string ="Sneha";
  public email:string ="SnehaBondre@gmail.com";
  public age:number =24;
  public isValidUser:boolean = true;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  start:number = 0;
  end:number = 4;
  constructor() { }

  ngOnInit(): void {
  }

  public usersArray:any[]  =
  [
    {srno : 1, uname  :  "Scott",  section:  10},
    {srno : 2, uname  :  "Abrons",  section:  10},
    {srno : 3, uname  :  "Smith",  section:  10},
    {srno : 4, uname  :  "James",  section:  10},
    {srno : 5, uname  :  "Adam",  section:  20},
    {srno : 6, uname  :  "Sathya",  section:  20},
    {srno : 7, uname  :  "Maneesh",  section:  20},
    {srno : 8, uname  :  "Haneesh",  section:  20},
    {srno : 1, uname  :  "Scott",  section:  30},
    {srno : 2, uname  :  "Abrons",  section:  30},
    {srno : 3, uname  :  "Smith",  section:  30},
    {srno : 4, uname  :  "James",  section:  30},
    {srno : 5, uname  :  "Adam",  section:  40},
    {srno : 6, uname  :  "Sathya",  section:  40},
    {srno : 7, uname  :  "Maneesh",  section:  40},
    {srno : 8, uname  :  "Haneesh",  section:  40},
  ];

  nextUsers_click()
  {
      
        this.start = this.end;
        this.end = this.end + 4;
      
    }
}

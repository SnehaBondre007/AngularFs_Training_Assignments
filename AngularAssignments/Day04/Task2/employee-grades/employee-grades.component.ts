import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-grades',
  templateUrl: './employee-grades.component.html',
  styleUrls: ['./employee-grades.component.css']
})
export class EmployeeGradesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public empGradeArray:any[]  =
  [
    {srno : 1, ename  :  "Scott",  grade:  1},
    {srno : 2, ename  :  "Abrons",  grade:  2},
    {srno : 3, ename  :  "Smith",  grade:  3},
    {srno : 4, ename  :  "James",  grade:  4},
    {srno : 5, ename  :  "Adam",  grade:  1},
    {srno : 6, ename  :  "Sathya",  grade:  3},
    {srno : 7, ename  :  "Maneesh",  grade:  4},
    {srno : 8, ename  :  "Haneesh",  grade:  2},
  ];
}

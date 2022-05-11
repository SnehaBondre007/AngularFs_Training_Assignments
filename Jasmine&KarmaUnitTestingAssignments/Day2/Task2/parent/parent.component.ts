import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public empsArray:any[] = [
    {"empno":6589,"ename":"SRIRAM","sal":3200},
    {"empno":6369,"ename":"SMITH","sal":800},
    {"empno":6499,"ename":"ALLEN","sal":1600},
    {"empno":6521,"ename":"WARD","sal":1250},
    {"empno":6566,"ename":"JONES","sal":2975},
    {"empno":7654,"ename":"MARTIN","sal":1250},
    {"empno":7698,"ename":"BLAKE","sal":2850}
  ];

  
  public  removeEmp(empno: number)
	{
		 var index =  this.empsArray.findIndex((x:any) => x.empno == empno);
		 this.empsArray.splice(index, 1);
	}
}

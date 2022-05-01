import { Component, OnChanges, OnInit , Input} from '@angular/core';
import { Emp } from '../models/emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnChanges {

  @Input() sortOption:string  = "";

  sortedArray:Emp[]=[];

   empArray:Emp[] = [
     {empno : 6589, ename : "Sriram",  job :  "Manager", sal:50000, deptno:10} ,
     {empno : 6767, ename : "Kiran",  job :  "Tester", sal:45000, deptno:20} ,
     {empno : 6547, ename : "James",  job :  "Developer", sal:50000, deptno:20} ,
     {empno : 6098, ename : "Smith",  job :  "Analyst", sal:4000, deptno:10} ,
     {empno : 7045, ename : "John",  job :  "CEO", sal:100000, deptno:30} ,
     {empno : 7567, ename : "Venu",  job :  "Manager", sal:55000, deptno:10} ,
     
   ];


   ngOnChanges(): void {
    this.empArray.sort((a:any,b:any)=>a[this.sortOption] < b[this.sortOption] ? -1 : 1);
      
   }

}

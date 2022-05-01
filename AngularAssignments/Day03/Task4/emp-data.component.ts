import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Emp } from '../models/emp';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {
  empno:number= 0;
  ename:string ="";
  job:string = "";
  sal:number=0;
  deptno:number=0;
  public empsArray:Emp[] = [];

  constructor(private _dataService:DataService) { }

  ngOnInit()
  {
    this.getData_click();
  }

  getData_click()
  {
     this.empsArray = this._dataService.getEmpData();
  }

  addData_click()
  {
    let empObj:Emp = new Emp();
    empObj.empno = this.empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

   this.empsArray = this._dataService.AddEmp(empObj);
   this.clear();
}

removeData_click(eno:number)
{
   this.empsArray = this._dataService.RemoveEmp(eno);
}

clear()
{
  this.empno=0;
  this.ename="";
   this.job="";
   this.sal=0;
  this.deptno=0;

}

}

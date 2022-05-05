import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Emp } from '../models/emp';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {
  id:number= 0;
  ename:string ="";
  job:string = "";
  sal:number=0;
  deptno:number=0;
  public empsArray:Emp[] = [];

  constructor(private dataService:DataService){ }

  ngOnInit()
  {
    //this.getData_click();
  }

  getData_click()
  {
			this.dataService.getAllEmp().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.empsArray = resData;
			});
  }

  addData_click(){
    let empObj:any = {};
    empObj.id = 0;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    console.log(empObj);

    this.dataService.addEmp(empObj).subscribe((resData:any) =>
    {
      alert("New Employee details are added to database");
      this.getData_click();
    });
  }

  updateData_click(){
    let empObj:any = {};
    empObj.id = this.id;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    console.log(empObj);

    this.dataService.updateEmp(empObj).subscribe((resData:any) =>
    {
       alert("Employee details are update to database");
      this.getData_click();
    });
  }

  deleteData_click(id:number){

    this.dataService.deleteEmp(id).subscribe((resData:any) =>
    {
      alert("Employee details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(id:number){

    this.id = id;
    
    this.dataService.getEmpById(id).subscribe( (resData:any) =>
    {
      this.ename = resData.ename;
      this.job = resData.job;
      this.sal = resData.sal;
      this.deptno = resData.deptno;
    });
  }
  clearFields(){
    this.ename = "";
    this.job = "";
    this.sal = 0;
    this.deptno = 0;
  }
  /*getData_click()
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

}*/

}

import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  deptno:number = 0;
  dname:string = "";
  loc:string = "";

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  addDept_click()
  {
      let deptObj:Dept = new Dept();
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;

      this.deptsArray.push(deptObj);
      this.clear();
  }

  updateDept_click(dno:number){
    let index = this.deptsArray.findIndex((item => item.deptno == dno))
    this.deptsArray[index].dname = this.dname;
    this.deptsArray[index].loc = this.loc;
    this.clear();
  }

  delete_click(dno:number)
  {
    var doc;
            var result = confirm("Press confirm to delete");
            if (result == true) {
              let index = this.deptsArray.findIndex(item => item.deptno == dno);
              this.deptsArray.splice(index, 1);
            } else {
                doc = "Deletion was cancelled";
            }
    
  }

  select_click(dno:number)
  {
    let deptObj:any = this.deptsArray.find(item => item.deptno == dno);
    this.deptno = deptObj.deptno;
    this.dname = deptObj.dname;
    this.loc = deptObj.loc;
  }

  clear(){
    this.deptno = 0;
    this.dname = "";
    this.loc ="";

  }
}

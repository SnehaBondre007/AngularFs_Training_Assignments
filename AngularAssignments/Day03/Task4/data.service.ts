import { Injectable } from '@angular/core';
import { Emp } from './models/emp';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    dataArray:any[] = [
      {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
      {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
      {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
      {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":30},
      {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20},
      {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30},
      {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":30},
      {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":10}
      ];

  
  public getEmpData():Emp[]
  {
    return this.dataArray;
  }

  AddEmp(empObj:Emp):Emp[]{
    let index:number = this.dataArray.findIndex(item=>item.eid==empObj.empno);
      this.dataArray.push(empObj);
    return this.getEmpData();
  }

  public RemoveEmp(empno:number)
  {
      
      var doc;
      var result = confirm("Press confirm to delete");
       if (result == true) {
        let index = this.dataArray.findIndex(item => item.eid == empno);
        this.dataArray.splice(index, 1);
        return this.dataArray;
        } else {
           doc = "Deletion was cancelled";
          }
          return this.dataArray;
  }
  
}

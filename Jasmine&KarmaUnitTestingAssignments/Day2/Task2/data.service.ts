import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Emp } from './models/emp';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    dataArray:any[] = [];
      baseUrl:string  = " http://localhost:3000/emp/";

      constructor(private httpObj:HttpClient) { }

      // Read All
      public getAllEmp(): Observable<any>
      {   
        return this.httpObj.get(this.baseUrl);
      }

      public getEmpById(id:number):any
  {
    return this.httpObj.get(this.baseUrl + id);
  }

  // Create
  public addEmp(empObj:any):any
  {
    console.log(empObj);
    return this.httpObj.post(this.baseUrl, empObj);
  }

  // Update
  public updateEmp(empObj:any):any
  {
    return this.httpObj.put(this.baseUrl + empObj.id, empObj);
   
  }


  // Delete
  public deleteEmp(id:number):any
  {
    return this.httpObj.delete(this.baseUrl + id);
  }

  getEmployeeDetailsByJob(job:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.job==job);
    })
    );
  }

  getManagersByDeptno(dept:number):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.deptno == dept && item.job=="Manager");
    })
    );
  }

  getEmployeeNameAndJob():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	name: item.ename, job : item.job} });
    })
    );
  }

  

  getEmployeeByDeptNot45():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item =>item.deptno!=45);
    })
    );
  }

  getSortedArray():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.sort((salOne, salTwo) => (salOne.sal > salTwo.sal) ? 1 : -1);
    })
    );
  }
    /*public getEmpData():Emp[]
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
      var result = confirm("Press confirm to remove");
       if (result == true) {
        let index = this.dataArray.findIndex(item => item.eid == empno);
        this.dataArray.splice(index, 1);
        return this.dataArray;
        } else {
           doc = "Deletion was cancelled";
          }
          return this.dataArray;
  }
  */
  
}

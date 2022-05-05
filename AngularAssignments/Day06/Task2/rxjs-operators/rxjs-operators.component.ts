import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  result: any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  getData1_click()
  {
    this.dataService.getEmployeeDetailsByJob("Manager").subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData2_click()
  {
    this.dataService.getManagersByDeptno(25).subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData3_click()
  {
      this.dataService.getEmployeeNameAndJob().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData4_click()
  {
      this.dataService.getEmployeeByDeptNot45().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData5_click()
  {
      this.dataService.getSortedArray().subscribe(resData =>
      {
        this.result = resData;
      });
  }

}

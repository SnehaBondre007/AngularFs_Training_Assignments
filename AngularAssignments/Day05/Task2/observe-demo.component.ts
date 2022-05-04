import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-observe-demo',
  templateUrl: './observe-demo.component.html',
  styleUrls: ['./observe-demo.component.css']
})
export class ObserveDemoComponent {

usersArray : any  = [];

constructor(private httpObj: HttpClient) { }

getData_click()
{
  let  url = "https://reqres.in/api/users";

  this.httpObj.get(url).subscribe( (resData:any) =>
			{
					// code to handle the result that comes from server
          // console.log(resData);
          console.log(resData.data);
          this.usersArray = resData.data;
			});
  }
}

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
  public prodsArray:any[] = [
    {pid : 10, pname : "IPhones", price : 1000, category :  "Phones", qty : 2} ,
    {pid : 10, pname : "Oneplus", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Samsung", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Asus", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Vivo", price : 1000, category :  "Phones", qty : 2} ,
  ];

  
  public  removeProduct(pid: number)
	{
		 var index =  this.prodsArray.findIndex((x:any) => x.pid == pid);
		 this.prodsArray.splice(index, 1);
	}
}

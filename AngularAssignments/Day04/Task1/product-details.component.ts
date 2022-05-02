import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  displayMode:string  = "List";

  productsArray:any[] = [
    {pid : 10, pname : "IPhones", price : 1000, category :  "Phones", qty : 2} ,
    {pid : 10, pname : "Oneplus", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Samsung", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Asus", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Vivo", price : 1000, category :  "Phones", qty : 2} ,
    
  ];
}

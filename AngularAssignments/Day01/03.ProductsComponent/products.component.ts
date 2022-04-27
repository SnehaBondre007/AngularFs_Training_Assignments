import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  productsArray:Product[] = [
    {pid : 10, pname : "IPhones", price : 1000, category :  "Phones", qty : 2} ,
    {pid : 10, pname : "HP", price : 1000, category :  "Laptops", qty : 1} ,
    {pid : 10, pname : "Samsung", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Acer", price : 1000, category :  "Laptop", qty : 1} ,
    {pid : 10, pname : "Vivo", price : 1000, category :  "Phones", qty : 2} ,
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

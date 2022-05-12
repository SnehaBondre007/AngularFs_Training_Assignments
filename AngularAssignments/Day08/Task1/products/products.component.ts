import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  category:string  = "";

  productObj:any = {};

  productsArray:Product[] = [
    {pid : 10, pname : "IPhones", price : 1000, category :  "Phones", qty : 2} ,
    {pid : 10, pname : "HP", price : 1000, category :  "Laptops", qty : 1} ,
    {pid : 10, pname : "Samsung", price : 1000, category :  "Phones", qty : 1} ,
    {pid : 10, pname : "Acer", price : 1000, category :  "Laptop", qty : 1} ,
    {pid : 10, pname : "Vivo", price : 1000, category :  "Phones", qty : 2} ,
    
  ];

  constructor(private  route:ActivatedRoute) { }

  ngOnInit(): void {
    let selectedcategory  =this.route.snapshot.params["categories"];
    this.productObj = this.productsArray.filter(item => item.category == selectedcategory);
  }

  


}

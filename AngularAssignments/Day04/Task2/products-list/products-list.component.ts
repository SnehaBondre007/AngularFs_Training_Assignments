import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input()
  category:string  = "";

  filteredProducts:Product[]=[];

  prodObj:Product[]=[
    {pid:1, pname : "iphone", category : "Phones", price : 50000, qty : 1},
    {pid:1, pname : "Samsung", category : "Phones", price :350000, qty : 2},
    {pid:1, pname : "HP", category : "Laptop", price : 70000, qty : 1},
    {pid:1, pname : "Acer", category : "Laptop", price : 50000, qty : 3},
    {pid:1, pname : "Vivo", category : "Phones", price : 50000, qty : 1}
  ]

  ngOnInit():void {

    
    this.filteredProducts = this.prodObj.filter(item=>item.category==this.category);

  }
}

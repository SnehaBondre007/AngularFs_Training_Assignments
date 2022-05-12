import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

pname:string ="";
quantity:any = 1;
price:any = 0;
totalPrice:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  getTotalPrice()
  {
    this.totalPrice ="Total Price : "+(this.price * this.quantity) ;
      }
    }
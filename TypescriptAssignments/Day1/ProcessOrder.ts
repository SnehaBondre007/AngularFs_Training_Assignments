import { FlowAssignment } from "typescript";

function initalPrice(unitPrice:number, quantity:number):number
{
    return unitPrice*quantity;
}

function discountPrice(price:number, discount:number):number{
    if(isHomeDelivery==true){
       return ((price - (price*discount)) + 30);
    }
    else{
        return (price - (price*discount));
    }
    return price*discount;
}

var productName:string = "Iphone";
var isHomeDelivery:boolean = true;
var unitPrice:number = 1000;
var quantity:number = 2;
var discount:number = 0.1;

console.log("---------------------------------------------");
console.log("Your selected Product is : "+productName);
console.log("Your quantity of Product is : "+quantity);
console.log("Applied for Home Deliver : "+isHomeDelivery);
console.log("---------------------------------------------");

let price = initalPrice(unitPrice,quantity);
console.log("Price for product : "+price);

console.log("Discount for this Product is : "+(discount*100)+"%");

let totalPrice = discountPrice(price, discount);
console.log("Total price including discount : "+totalPrice);
console.log("---------------------------------------------");



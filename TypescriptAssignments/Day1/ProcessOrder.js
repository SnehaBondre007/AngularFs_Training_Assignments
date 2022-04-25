"use strict";
exports.__esModule = true;
function initalPrice(unitPrice, quantity) {
    return unitPrice * quantity;
}
function discountPrice(price, discount) {
    if (isHomeDelivery == true) {
        return ((price - (price * discount)) + 30);
    }
    else {
        return (price - (price * discount));
    }
    return price * discount;
}
var productName = "Iphone";
var isHomeDelivery = true;
var unitPrice = 1000;
var quantity = 2;
var discount = 0.1;
console.log("---------------------------------------------");
console.log("Your selected Product is : " + productName);
console.log("Your quantity of Product is : " + quantity);
console.log("Applied for Home Deliver : " + isHomeDelivery);
console.log("---------------------------------------------");
var price = initalPrice(unitPrice, quantity);
console.log("Price for product : " + price);
console.log("Discount for this Product is : " + (discount * 100) + "%");
var totalPrice = discountPrice(price, discount);
console.log("Total price including discount : " + totalPrice);
console.log("---------------------------------------------");
